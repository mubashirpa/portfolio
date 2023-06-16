'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6088163a82f63b6c9d15ca22cdb68a4b",
".git/config": "6f05f8f67d4237492522655dea2ca305",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6093754e31da64b4b611b6e6c89a5a74",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "89a4a18d0bc9a15a4b3ab6b3e0a188c5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "317ecdf5c0af6dd1118bc231ee8c772a",
".git/logs/refs/heads/main": "7b1d146c275524d9939b3b6cc2422def",
".git/logs/refs/heads/master": "afeda87335b524481de8c7fa29e41c32",
".git/logs/refs/remotes/portfolio/HEAD": "c74cfa5538db70215c1a8f6ae4193f66",
".git/logs/refs/remotes/portfolio/main": "40ec72de093e0722d6fe809683b81eee",
".git/objects/02/7c94b5af5e0eb1c9f6dc7dc8787b126da45394": "bd0d0f67d82769841cb51a230b3b4ce6",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/e824bb39abdaeb2d6fcab6647d61c05119f38c": "3ee04b437b74d7fed40a839b07d65f23",
".git/objects/06/869cccbd3f14624536003c8daed13b68835ca4": "7bff58911de959270371bf9416ed81a5",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/10/5ee9bb95263876ad8c51b6c5f11ab62f4a49e1": "b872896794afca78a7af299e6accacf7",
".git/objects/10/7207f85f42c908a5c6bc81c14ba649b1720a25": "3d999999ce1c455580372f336359f9fd",
".git/objects/13/9f51affcd5eb0f47cf89f5ce8ff132e25cd19c": "d9fb80d23d29b326769fd0b93606b6d2",
".git/objects/13/e56b8c13fdac2419a10168a5eb3d3d44da56ab": "899d1d6237b6ab5df8c4e10d21e32a6f",
".git/objects/18/f8972b0cc597f4757c3ecbc92da0d21f4ae803": "b38afc4bfd3788561aae5bfc1bc48dd5",
".git/objects/1b/3f85f182572157ab14765f3608e335c381c0dc": "169cc59f12f0f2583b40b3acca0d01b4",
".git/objects/1b/9b05bae66ddc1b43bab8ebb1f75e9f194e5c2b": "7b59241913165acdd2875bf40cf1c3ee",
".git/objects/1c/e0ef39565b3a54548da29595062e4f745ac72e": "a8adc026293234c79958c6ed1f9c3341",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/9a29c8262e4bd9489a52b2f4d831a1313fb1ac": "e347d5ddb76161f5a30a7f6e6d295f8f",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/a63ab45a861f122652453d3fd6c6d8f8952947": "8dcad0ed9534b6eb7014793ab40aa335",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/22/262f171f9c07d9be26bd78f25d0fce222afef2": "d293bdad8ce530a62fc3185d25e33815",
".git/objects/23/074efacfac2493ebe209f8e2513e128d040829": "51c8a4d0936930106e22a7511247327a",
".git/objects/24/c11289187670b1b42eac847f05e3a12b3812b1": "bcd13bc6b3eb95dd026bbe9e958c6d02",
".git/objects/26/0b19879e76e146e7edca7c824f4a7c7dfc5dba": "fe005395c110fb6667cc5f72142602e8",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/27/2ae9ed6e1a4c8b8a16fb5ab59d9325fc79d613": "4eed0b5849d5f6f57bba42c98f764266",
".git/objects/27/b51e04d4030e722fc2403e34b2cee0f8f5e537": "ad33c45cda63df697a5e908bbc1f2358",
".git/objects/28/762f49ae2cf36618a9f1c6e7533d9b260b4d2f": "624aa8d3728d264f70aceb2d59c2e4bf",
".git/objects/2b/5420e6310d9712fdf323bb8e45f06f961df9bb": "79268fbd6d02b54502f8bead4302db3a",
".git/objects/2b/813e0a902d85b7ed2832b8c30e3b4851fcf8e7": "a3e68a979cf50feb56eb96317144099d",
".git/objects/2c/35603ac12a15be62ce225fdb28c15c9de86718": "15d57d8192e68f71daf5a033c93f8327",
".git/objects/2c/757d43f8efb46589c554a3d5540466627af847": "9cc359b516f08a71e13167e3b09ab3d7",
".git/objects/2f/de5da091bdb53907ce4f60a8467ddd82f99a5b": "fa07a070b0526b7388eb06fc4815c828",
".git/objects/30/2eeef3606043f6680090ccdce111d468e64447": "faa020eb116873ed3670c7698ee46fe8",
".git/objects/32/726fa81076b49bc34eb1be05976424c394bdfe": "32807c7fe651a3e2e254f97bbbc9cace",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/135ae41a70022a703d4e12c66667e04517e170": "39c5f68431293d406abf5a1684ce9a91",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/b275eddfdcf9a84874dc21e78d07b7e5ac2352": "7a8525935e8d29475618054c446ea733",
".git/objects/39/a74f2ec0d5b338240fec3b5311647644e14d8d": "2b1a196ab3e000f6c7f79ef3418c6631",
".git/objects/39/bfa4cf8a69f1dbf1ca14be79b2863999a729de": "bc7218c04b52f2c1ac565a0ed61f1cb9",
".git/objects/41/e5a9563e62107a9ddcd1620af933218223e40a": "a01d120c91fb452372fe3aa910a07e08",
".git/objects/42/252ce8c3cca34368f7cbcba1d756a8c36450b4": "21e3f22bb089924a5b1def1f29719a44",
".git/objects/42/9428afb9508f67259a01b9ce39704de0add262": "73ac29878dd653135b0f78029357c59d",
".git/objects/44/1dc4d9489608dd235d237bbf91f219b60b22e7": "fa8f9bffa3ead979aaac690c995325ff",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/7b95e019181a4060581a910f169b66aba2e9fd": "f48b3c58cd1e9bde1d995694e2fcc60f",
".git/objects/49/aca45b3de3a76df09d69fa4a791d3fdbe0246e": "9a26981dc9c34db96598803d463bcd3d",
".git/objects/49/b29e973214a96503139b04bb1dc2eb8b6fa8fd": "9ebf0abf43ab34bb507767fddc6a6dde",
".git/objects/4b/50602a46e4b1906d9819f5cbcc619f81315d33": "2bfde6c325ca8da4dbb850d90b10b559",
".git/objects/4b/d54e0c24fb862761cf023e512a1c6036cec246": "b8f39e8e218b9c5f14407f3feae16d12",
".git/objects/4c/b11a80058423bf5526d3d7fe8ffa023b01de2c": "b29c9e31620182f560d4c369eb2e2053",
".git/objects/4f/fe29f7fb4695623e532b5228998f2cc246e114": "a54b8537ce9a685a21fd1e7414dd0ee3",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/bf91c110f74e408819c31aaf3f708a5ed08910": "eb6785c4b39973f02ed1c74385fd7150",
".git/objects/53/9a254ba493e2757c1a760eb601c3bab8bd9d26": "5421727efbb6f988eb690a1bb52ccee4",
".git/objects/55/b486033e19c1e9b2c984bff4828ab84079471f": "62f28fe4910f0a7d47479d9286a9527a",
".git/objects/56/c5d62b565912a290a9e110029a90decae825eb": "f75d1a967d39d1c6d7f580b3d20cf09c",
".git/objects/57/42fc2ee59b6da73ff8d61f655424494de15b02": "99f46de5edf9ec9c278e1759f68c4095",
".git/objects/58/7052ffcc6f22ca2df5dc0a24e6d82ae01d25bc": "40e8efaf315cdaba5635d66503715c4f",
".git/objects/59/3ae18097b04533e5a357741804c76f7527e07c": "82fa6d242655652b83d56ebb8c2330b7",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/eaf19ecdffebf4df403b383eeaf9fb972eb8c0": "c3d346a1038974f98f82c03a023c4b67",
".git/objects/5b/1557738893ce2afa1e6ba2c08cbd6382aebb63": "0fd675db6d3b2ea279b0a24d1b347863",
".git/objects/5b/39597fc5e1d839f1509f8b0ca998934360ab1f": "0d944f2ea432c7564aa9cd5fe0124d86",
".git/objects/5c/a4c1bd454f1e75575c203f0dd0a7ef23f49bc8": "4cb3305ecd105c55a692454a9d6c476a",
".git/objects/5d/0ccdb43e5d2ff7fc69545087f898b7043145d6": "ac2de95e8890e45916ff8ef307f33429",
".git/objects/5d/976226c2034e09710895aea2723b1085138eb1": "7de63681c4eb451852c1b1a023a1b40a",
".git/objects/5e/8b928582184713fb0b2bb04191aadcf9e4296b": "e4cd0d1b2512fad3568d58df4539f6aa",
".git/objects/5f/4f7d07ead206a8808ce090f21f64ae2c072f02": "c50bee024d044c81b1329f0216cc0e2a",
".git/objects/60/284706dd3473a6583359ea5457a44985a9087e": "e9616680085612581dbaa4231f00bddf",
".git/objects/60/775c91a24206031f404dd8b392ca42c0b3af16": "75cdd527bb58e1c12de682024df9c783",
".git/objects/61/977fff12ec16a6bec7d9d95817aff48af75496": "f62e0bd283aef1430fd1e0ff1ed88815",
".git/objects/61/ab28b57806e6a781beb53ee11080ee5d958f08": "92a1e943d4e416a52cdef7ca41bdb3a3",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6d/6eb484865163279ded5aecd058cd3066ebac45": "a91f1da6b7775c8d84b1f662eb26e7f8",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/faf09960c2afb44294471a50e5b5f865604081": "bc5446eaf244dbb53d7aec85efc53f1e",
".git/objects/73/02b5dfdb071487bd01439632924e8098b31b30": "541277b2d4c462266b4e65696bba245e",
".git/objects/73/ba5a003e98f0634f15f7d34eb4fb4e714bb00f": "b77f96b499586580383c82ce09fa0223",
".git/objects/74/d58aabafe0133af9abf6b12b1630f796323010": "6d922ed62a4251fbc77c0667b15bd1d6",
".git/objects/76/faf63c43fea5f5d4ab150052d7156ada369938": "2aed01a36801398dd9e7c4838c625d1b",
".git/objects/78/8566c75b842fcd229c1d134e20a1fb1baaa807": "21cc982ba99ddf83fcaf1100393330e5",
".git/objects/7b/89a42b5fdc38fe35189589b15ab1b493a4d8cc": "64a6de3ab3cfe54a01715fa50646626d",
".git/objects/7b/f35e293a2f37d7d305b234561dd9308a317a7c": "0a76cba7f02d7f645cec1d88d5ca26d9",
".git/objects/7b/fd5ec54ca7f918acd7db730006ea32b42c6389": "a8c5a7794f7d09655691894a8fb68e24",
".git/objects/7e/471017200105e5e3ee0a561fb60de4d7cbb700": "488889038cff0ae4eee3b515cb2a9e46",
".git/objects/80/7fda5cd90e6f4816309049979ccba0318b9e3e": "81a86e335fc151d59fefb95d2767477f",
".git/objects/80/b41254faaf41ebc6c8e2486f8ff38ee6c9f7ee": "b26551277f46ff4a3ac9dc4e10417905",
".git/objects/83/616b08e7afa9e22eb231bddd4c86fc7b94a76e": "f282763fb17e14ee54358ab15b924818",
".git/objects/84/8d06f5afe3d3de2676911fd7f4b53502729636": "d3fd06a4b3821134ad7857a2861d0f57",
".git/objects/85/8f79ffa1404f5dfbcf468e05bae5e4a85f1561": "259e4e72623d1180a54ed37e7437a8da",
".git/objects/85/b8f7677a963f0745716e3e0a5dfa10e312618b": "8a7c7d3494b90fa72f06ce9942add875",
".git/objects/86/707f8ea5250bd4bc9b7d47a466491c57548bc5": "886f7fc30530b2380df1259e3a25350a",
".git/objects/88/c1ffc251f301f8302f12ba4fa1ae93964b03ff": "3389e9b04d980b13d6f681b328187cd5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/d5c3a25dc28d6f20a00678d80bbd163b4e0bbd": "41119ef8bc5709341e20aec61898e5ab",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/6e6c5919f5a40970d1074dc4a7e953c61414e5": "0c716464adc6ffef0278d6c8204b858b",
".git/objects/8c/ca8bcf500bab6b23014f5d08a5d89b016fc1e9": "a3af1ffb8e08ba6cfd1a34f3407dd81d",
".git/objects/8d/be085a939980d5100bb13450215a38f2088f00": "a5fd2142113d54c2463afa655fac80d2",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/dee53464dfc6e7c8a2b76e24595d6c13a003c2": "f4c9696c3ee54a06e4772b1484844478",
".git/objects/94/26d9fc7fb89aebce83d18c8643ae06de9eae26": "81d8c2a2f815c23df388fa883b24ac30",
".git/objects/95/416f72b6c91cb39a53ae433674b034e53d3785": "0151b958f1a6cb123e5edf2f87ac3d4d",
".git/objects/95/794d13cabb5f8e3006c8c85bac26814127f9c4": "2ea908ff3ce458b5524f1fb66c0b4d87",
".git/objects/98/743687bdae68e830bd5f3e70693ed35958e756": "c3ed78fd60623159eb6e8b23893754d0",
".git/objects/98/930274ab3f0cb5385226d6332e0cc69eb571dd": "18cd2bf91c4f5ce87ec74206a99c1deb",
".git/objects/9a/887220fada5bfa739f6fec71dd65260e7460c1": "23d67b9e992d00441fc80d41f2117c86",
".git/objects/9a/ac7f4114ff285ef96ceedd4e63777531a67bf5": "1b1af5931db4db6232f5d55cd566c7d1",
".git/objects/9e/eba1ffe0f5405691062b9fe54165604d95514f": "ec6524969dbcd86f6d371003d75d5508",
".git/objects/a4/371a6c10ab86a38b9936c3676a65c82daad553": "3759253bd25c7a693efe1ed38ba3937e",
".git/objects/a4/4a23297e0a9ba39ddf41f7d23c109513321b7a": "99fd56ee710bcdbd852d66f44c1effed",
".git/objects/a5/1dfbc70634e92c9dc1176dd378cd97a375bfeb": "8fcd928fd141086f5127b7dd78915c6c",
".git/objects/a5/cef3b138c4d7b713036bd7e1ea9affef6e904a": "78b526c0c05e8d19bcaab5558e385f77",
".git/objects/a6/c38fa5b27d18f7806564677300835201e9ad9a": "4450a5f9cf0d7e4c10cbd32e054502d2",
".git/objects/a7/0a2258d271feda9676ccc658546c471f235b0e": "a23b432054516a77383e9ced61f466dc",
".git/objects/a7/ca926d4760e63dd53c70aadfdce140de763c83": "5a76a57dc69d90b75cffde678eb65b9f",
".git/objects/a9/47f4361e3b5be72ee29aee22b5d22cc1e3a207": "65a8112f535153da95277de9aa50fbf3",
".git/objects/a9/783a83778381c7902d0af04d24ca45af10b89b": "c7801e71c60f691d3b7ebb42951cd6ff",
".git/objects/ab/5b60ed8fec1531306e1c92c9b8213b6a29a929": "e2d170b9794e044dd456039c295e32fb",
".git/objects/ac/8b0fab0cac718bc6942f4606f18b50d98b941a": "cf78fd85b7cb2c325dd260ecf7b846aa",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/e60e5a17e8461638d203d64ad6aab391fe8e48": "7011f81e08ae3033cc4ce97514e6c328",
".git/objects/af/1783c20d25327f2d59cc2d252ed9a550d25c42": "ac6669f43d1a8e1aa0b8483badf17e32",
".git/objects/b0/c6097fa18a508aed7252c13ef193de28f60e72": "5bd9e11da0daa9772f364104d9bdd31b",
".git/objects/b0/e599f325f73e983767d492c7aa2d52cbe54ae2": "8ab05e2fa3b7ecb6768fd229e75b25c3",
".git/objects/b1/b85d0d959cef51a180f4cddaa1617cc94bf3ec": "5d37ea39867466695e3bbd5e02638b84",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/3e4e8dd1e034921dedd23c9b808a1a69c3f0b5": "e1fae8defd60aaa23ccc896b3f8c8944",
".git/objects/b6/16278bc5facc36c8c635d106b629565489f0ba": "7b729e52cfc63155586a2d094b1dacb3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/1d7818f680712d9f229063481a9bf15fd09767": "445cb4b46f558e5cfc55679d5c8e8854",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5dcdfd36ed7ee301fcf2375d408ac8d6b54b40": "3bfa161592a7d06d255cbac1a30dd9f9",
".git/objects/ba/9e63fd9acc22b5c4e7f125573c350713ce59d5": "5b2fa160a72bf401264fb439e8364b8a",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/bbd28d2694d3eb317fb6224d9f947719d0b481": "bed17eebc2b8034d3595d45f31248501",
".git/objects/c0/625e9f8ef490d715dec44e40aec04f40bd44a4": "00671b62c14fbb368042db513d436dc8",
".git/objects/c0/68d6c49acb433b5a89cd090f316feedb609c57": "ad181d607376ff6ea585cfbeb56edd78",
".git/objects/c4/a8f51a10d3f06599091ee7c9a7473076f0ce88": "eda1cea5e01e5b22a4ef49ea5f4d0a07",
".git/objects/c5/640cb5c765588018da26a9ba9600b70384d90e": "dca4b4625367211298759deb80ce4250",
".git/objects/c6/e93e8029800f4f8996203064e3dd2ab6feab2b": "cbbc7b13461009f6d315a4248895e248",
".git/objects/c7/bdd4d65c03a9ef952e4ea6347065e6eae366f8": "878580aa22faf6586da05af8f442dafc",
".git/objects/c8/12012c0899f95485d82bc31286d02c7f4899d5": "1f9922728f56bec69183fb554b1e98bd",
".git/objects/c8/ac70b89fbb7b2e92317057b3687580fafdfc4a": "a801f2ea0e8bc445999e083a0828fbd5",
".git/objects/c9/7c5f4f952d43b383957e6e3cccc9c777903a93": "43e0814a13587bdb0148ae5456fff178",
".git/objects/c9/b84d5732726c38b88306c55a7568a358eb2fbd": "9b797df4e94dc876e1158b5843539a66",
".git/objects/cb/2b1ff48201d698310cb7f25b741f1031ee93a6": "4ff7bfc4ca7af95a53172daf75c66705",
".git/objects/cb/4a43cda3a0d9caee3d1157a27578a41875308f": "d4dcbae8e175ddbaf416398c35afca9a",
".git/objects/cc/b6ef43626619572e10a884f7d0cf89a7bb488b": "694f5366464e20768fb6b42838cd5c97",
".git/objects/cc/b8873fefabf5b0159445a3e9e113170f805bec": "2810a0104ec1c1d171edb230cc4718cf",
".git/objects/cc/db7f8f7dcae80856a787e94ed92330913c93a9": "6c20168af984fc6ea247d68aa75f96d2",
".git/objects/cd/e6c400818281efc7c0373a70734ba7ca320adb": "0c3b9e30220fac5ed72faa294a530d9e",
".git/objects/ce/64932782213f1cced093a60922ca20ab0e0c3f": "8f15597e69b7a232625bcfb180fa9e4e",
".git/objects/d0/2de5433a81da9d9d4840adee696bc23bb27c0b": "e5ced5c93e612d1e82eee4e011002c03",
".git/objects/d0/c0db5b71fa4bf710630a7549aa3f20424d2b82": "99508f1f0ebace17747d87cc48ff431a",
".git/objects/d2/48b520af2928949b3b1d1d3af360e525dd853b": "89473157349450350a402276525d24d8",
".git/objects/d2/6d6e90fe7c9b22f2a44639410f5c609fcc1c99": "4321ef4459a38aecc801c9460ed2774a",
".git/objects/d3/271542b989ceb5298d9dc944b043800d40e05b": "909fa51b87faf4d404c4d3b150e6099f",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/1bd2ee47e602177e94eddd953d01aae1420ec6": "9909f620df99b52e936cb425cb450a0a",
".git/objects/d8/485846b4c3b378df16f53706b8d34ee99ae1d4": "27560323b6ba1feb2992af408968c654",
".git/objects/da/1b15ef0cf4128c4edf2b9d05bfeafde7382994": "d00bfcacb4c49bd45828432298810d4a",
".git/objects/db/53d7138d9c6cd01965c24706ff29433fb8e3b9": "c8b989f2c30746ea0d9193a4195d000b",
".git/objects/db/f436d6551e563aa42aa6ed29bf2e56201a4820": "2c459edbd539d4fd76c9875dda2cf744",
".git/objects/de/3540f0902e34d7c33ac00ffae1382912ed17bb": "9b89f99b30c47040899d91f3b4f63d92",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/e3/f4f06eadc056711bcce8ac3acfca1f8b18310d": "d57874461ae6a692c81db44d3684f409",
".git/objects/e7/19ae04c41476d8d1a8b08c6b306337305754b5": "306ab855dad07a7bef8330a5fcffac50",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e9/604e6672ca7761e81c49778a9a91835163bc11": "ac504866d6d47add855a567a48955329",
".git/objects/ea/5ac6a6966037d7df1ff46f9ec15016448c940e": "e638746177d171e24507a8ce4de0943c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/f2b85ed42e5e8eadb54f386219993d881c594a": "94c9138f67b973cc716feabd21d3ff08",
".git/objects/ef/de5146850168bc22baf9ca7831e1f515a5628d": "d0a2a22a579692c220076ba6af869a0e",
".git/objects/f1/b4e7c3587d4fbc674f24962eed2ba29cbd5eee": "63b021366ef56bd738bd7e23b7835af0",
".git/objects/f1/f6fdfefc22652725847a018459abf5285889f5": "732a1c2b3b18bafe8a95c8e0c40677e4",
".git/objects/f2/e458fde368af3d393e93ba57ac59de52daff24": "83e8bc1fbbc91afa1159dc2fee30031b",
".git/objects/f3/171cede6a1e25558391fc4aca0382becff75e1": "4499dd49a4a602f76c10fb3bdc41e6a1",
".git/objects/f3/39251e814e6c4d3f1443c48e927d1fbf52f6f0": "116505bda9fed5a51377fa5138f77669",
".git/objects/f4/2dbbafd8e5c38e3cdc92a7477029154b369a08": "8878a797e19ee8326967469559d3792f",
".git/objects/f5/93bcf472f6c2553e141b3bafdcdc89f0b2d277": "2bf6e50240435d509f9096133308a55d",
".git/objects/f6/b1a6bae22e874569df39bcb28c6acaf28e62d1": "32a6c318edbe5f91ddeff42e5c22f86f",
".git/objects/f6/e1f2875efaf4abd7f60468af25faf1b8c467e5": "a9e6fe09ce21b303a70108bc0f4a13ec",
".git/objects/fb/c8e7f7615f712acf7a3e64f509b6d3b4aeeb10": "f90858653e306c64f5cb9c8e7647fc12",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ff/48a14077b6d5e6fd95ab65053a7548ebffba20": "2b0708d10ae1535ea4385c5660d1277f",
".git/refs/heads/main": "f4474e4c178c4632ccd70aabb45a2cf5",
".git/refs/heads/master": "68e53191817800e69f9a6c9201fb2ffe",
".git/refs/remotes/portfolio/HEAD": "5565d054fdd34f82d53c9c8b09a72eeb",
".git/refs/remotes/portfolio/main": "f4474e4c178c4632ccd70aabb45a2cf5",
"anim/loading.gif": "f70a0833a03cfcd0382b9325a1464b4b",
"assets/AssetManifest.json": "351a19517fbfae6fdd8863dfdc43575b",
"assets/AssetManifest.smcbin": "84559f5c9ad0cc2f495cc59fd2a5d298",
"assets/assets/images/avatar.png": "e74eb3885d1996505736e36d259d2c03",
"assets/assets/images/edumate-home.png": "ad9c1dbd43f292e725e568ff2eec6618",
"assets/assets/images/insta-movies-home.png": "3c286a91eeaad8d02d530b90aeced54f",
"assets/assets/images/ysports-home.png": "c9d5477708b55691dcb360db22b182ea",
"assets/FontManifest.json": "c6b115e9ab2ac9308748c8767ca04429",
"assets/fonts/MaterialIcons-Regular.otf": "5b4abd5b559924cdd042c850b25a8ce2",
"assets/NOTICES": "4b3df2153aeabbbbace41704506bb2cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "be271838cfb555093a41e12292acce83",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c7e80cb39dd84cbf7dfa28983e999362",
"/": "c7e80cb39dd84cbf7dfa28983e999362",
"main.dart.js": "4ae0a4efc22d5d39245ac89bdd6b6af6",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
