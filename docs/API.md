# NFT Marketplace API (FES Virtual Internship)

Base: `https://us-central1-nft-cloud-functions.cloudfunctions.net`
Discovered 2026-09-20 from the example site's network calls (https://nft-marketplacee.web.app). Helpers live in `src/api.js`.

| Endpoint | Returns | Fields |
|---|---|---|
| `GET /hotCollections` | array (6) | `id, nftId, nftImage, title, code, authorId, authorImage` |
| `GET /newItems` | array (7) | `id, nftId, nftImage, title, price, likes, expiryDate (ms epoch or null), authorId, authorImage` |
| `GET /topSellers` | array (12) | `id, authorId, authorName, authorImage, price` |
| `GET /explore` | array (16) | same fields as newItems |
| `GET /explore?filter=price_low_to_high` · `price_high_to_low` · `likes_high_to_low` | array (16), sorted | same |
| `GET /authors?author=:authorId` | object | `id, authorId, authorName, authorImage, address, tag, followers, nftCollection[] {id, nftId, nftImage, title, price, likes}` |
| `GET /itemDetails?nftId=:nftId` | object | `id, nftId, nftImage, title, description, price, likes, views, tag, creatorId, creatorName, creatorImage, ownerId, ownerName, ownerImage` |

Routes the example site uses: `/author/:authorId`, `/item-details/:nftId`.
Explore shows 8 items first, "Load more" reveals 4 at a time up to 16.
