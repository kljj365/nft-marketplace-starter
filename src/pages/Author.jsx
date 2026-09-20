import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import Skeleton from "../components/UI/Skeleton";
import { getAuthor } from "../api";

const Author = () => {
  const { authorId } = useParams();
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    let cancelled = false;
    async function fetchAuthor() {
      setLoading(true);
      setFollowing(false);
      try {
        const data = await getAuthor(authorId);
        if (!cancelled) setAuthor(data);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchAuthor();
    return () => {
      cancelled = true;
    };
  }, [authorId]);

  const handleFollow = (event) => {
    event.preventDefault();
    setFollowing((current) => !current);
  };

  const followerCount = author
    ? author.followers + (following ? 1 : 0)
    : 0;

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      {loading || !author ? (
                        <>
                          <Skeleton width="150px" height="150px" borderRadius="50%" />
                          <div className="profile_name">
                            <h4>
                              <Skeleton width="200px" height="24px" />
                              <span className="profile_username">
                                <Skeleton width="100px" height="18px" />
                              </span>
                              <span id="wallet" className="profile_wallet">
                                <Skeleton width="250px" height="18px" />
                              </span>
                            </h4>
                          </div>
                        </>
                      ) : (
                        <>
                          <img src={author.authorImage} alt="" />
                          <i className="fa fa-check"></i>
                          <div className="profile_name">
                            <h4>
                              {author.authorName}
                              <span className="profile_username">@{author.tag}</span>
                              <span id="wallet" className="profile_wallet">
                                {author.address}
                              </span>
                              <button
                                id="btn_copy"
                                title="Copy Text"
                                onClick={() => navigator.clipboard.writeText(author.address)}
                              >
                                Copy
                              </button>
                            </h4>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      {loading || !author ? (
                        <>
                          <div className="profile_follower">
                            <Skeleton width="120px" height="20px" />
                          </div>
                          <Skeleton width="120px" height="40px" borderRadius="6px" />
                        </>
                      ) : (
                        <>
                          <div className="profile_follower">{followerCount} followers</div>
                          <a href="#follow" className="btn-main" onClick={handleFollow}>
                            {following ? "Unfollow" : "Follow"}
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems
                    items={author ? author.nftCollection : []}
                    authorImage={author ? author.authorImage : ""}
                    loading={loading}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
