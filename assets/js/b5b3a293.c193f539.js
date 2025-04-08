"use strict";(self.webpackChunknextjs=self.webpackChunknextjs||[]).push([[136],{2955:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var t=i(4848),r=i(8453);const c={sidebar_position:4},d="Volume v\xe0 Bind Mount",l={id:"docker-volumes",title:"Volume v\xe0 Bind Mount",description:"1. Docker Volume l\xe0 g\xec",source:"@site/docs/docker-volumes.md",sourceDirName:".",slug:"/docker-volumes",permalink:"/docker/docker-volumes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Container",permalink:"/docker/docker-container"},next:{title:"T\xe0i li\u1ec7u tham kh\u1ea3o",permalink:"/docker/category/t\xe0i-li\u1ec7u-tham-kh\u1ea3o"}},o={},s=[{value:"1. Docker Volume l\xe0 g\xec",id:"1-docker-volume-l\xe0-g\xec",level:2},{value:"2. Bind Mount l\xe0 g\xec?",id:"2-bind-mount-l\xe0-g\xec",level:2},{value:"3. So s\xe1nh Volume v\u1edbi Bind Mount",id:"3-so-s\xe1nh-volume-v\u1edbi-bind-mount",level:2},{value:"4. V\xed d\u1ee5 v\u1ec1 Volume",id:"4-v\xed-d\u1ee5-v\u1ec1-volume",level:2},{value:"V\xed d\u1ee5 1: L\u01b0u tr\u1eef c\u01a1 s\u1edf d\u1eef li\u1ec7u MySQL",id:"v\xed-d\u1ee5-1-l\u01b0u-tr\u1eef-c\u01a1-s\u1edf-d\u1eef-li\u1ec7u-mysql",level:3},{value:"V\xed d\u1ee5 2: Chia s\u1ebb d\u1eef li\u1ec7u gi\u1eefa c\xe1c container",id:"v\xed-d\u1ee5-2-chia-s\u1ebb-d\u1eef-li\u1ec7u-gi\u1eefa-c\xe1c-container",level:3},{value:"5. V\xed d\u1ee5 v\u1ec1 Bind Mount",id:"5-v\xed-d\u1ee5-v\u1ec1-bind-mount",level:2},{value:"V\xed d\u1ee5 1: Ch\u1ea1y project Nodejs \u1edf m\xf4i tr\u01b0\u1eddng dev b\u1eb1ng Docker k\xe8m hot reload (auto-restart khi code thay \u0111\u1ed5i)",id:"v\xed-d\u1ee5-1-ch\u1ea1y-project-nodejs-\u1edf-m\xf4i-tr\u01b0\u1eddng-dev-b\u1eb1ng-docker-k\xe8m-hot-reload-auto-restart-khi-code-thay-\u0111\u1ed5i",level:3},{value:"V\xed d\u1ee5 2: Bind Mount MySQL Data t\u1eeb th\u01b0 m\u1ee5c t\u1eeb m\xe1y host v\xe0o container",id:"v\xed-d\u1ee5-2-bind-mount-mysql-data-t\u1eeb-th\u01b0-m\u1ee5c-t\u1eeb-m\xe1y-host-v\xe0o-container",level:3},{value:"6. C\xe1c c\xe2u l\u1ec7nh CLI \u0111\u1ec3 qu\u1ea3n l\xfd Volume",id:"6-c\xe1c-c\xe2u-l\u1ec7nh-cli-\u0111\u1ec3-qu\u1ea3n-l\xfd-volume",level:2},{value:"7. M\u1ed9t s\u1ed1 l\u01b0u \xfd",id:"7-m\u1ed9t-s\u1ed1-l\u01b0u-\xfd",level:2}];function h(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"volume-v\xe0-bind-mount",children:"Volume v\xe0 Bind Mount"})}),"\n",(0,t.jsx)(e.h2,{id:"1-docker-volume-l\xe0-g\xec",children:"1. Docker Volume l\xe0 g\xec"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Volume trong Docker l\xe0 m\u1ed9t c\u01a1 ch\u1ebf \u0111\u01b0\u1ee3c thi\u1ebft k\u1ebf \u0111\u1ec3 l\u01b0u tr\u1eef d\u1eef li\u1ec7u b\u1ec1n v\u1eefng (persistent data) v\xe0 chia s\u1ebb d\u1eef li\u1ec7u gi\u1eefa c\xe1c container ho\u1eb7c gi\u1eefa container v\xe0 host (m\xe1y ch\u1ee7). Kh\xf4ng gi\u1ed1ng nh\u01b0 h\u1ec7 th\u1ed1ng t\u1ec7p m\u1eb7c \u0111\u1ecbnh c\u1ee7a container (ch\u1ec9 t\u1ed3n t\u1ea1i trong su\u1ed1t v\xf2ng \u0111\u1eddi c\u1ee7a container), volume \u0111\u01b0\u1ee3c qu\u1ea3n l\xfd b\u1edfi Docker v\xe0 t\u1ed3n t\u1ea1i \u0111\u1ed9c l\u1eadp v\u1edbi container, gi\xfap d\u1eef li\u1ec7u kh\xf4ng b\u1ecb m\u1ea5t khi container b\u1ecb x\xf3a ho\u1eb7c kh\u1edfi \u0111\u1ed9ng l\u1ea1i."}),"\n",(0,t.jsxs)(e.li,{children:["\u0110\u1eb7c \u0111i\u1ec3m ch\xednh c\u1ee7a volume:","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"B\u1ec1n v\u1eefng:"})," D\u1eef li\u1ec7u trong volume v\u1eabn \u0111\u01b0\u1ee3c gi\u1eef nguy\xean ngay c\u1ea3 khi container ng\u1eebng ho\u1ea1t \u0111\u1ed9ng ho\u1eb7c b\u1ecb x\xf3a."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"T\xe1ch bi\u1ec7t:"})," Volume kh\xf4ng b\u1ecb r\xe0ng bu\u1ed9c b\u1edfi h\u1ec7 th\u1ed1ng t\u1ec7p c\u1ee7a container, gi\xfap d\u1ec5 d\xe0ng qu\u1ea3n l\xfd v\xe0 sao l\u01b0u."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Hi\u1ec7u su\u1ea5t cao:"})," Volume th\u01b0\u1eddng \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef tr\xean h\u1ec7 th\u1ed1ng t\u1ec7p c\u1ee7a host, cung c\u1ea5p t\u1ed1c \u0111\u1ed9 \u0111\u1ecdc/ghi nhanh h\u01a1n so v\u1edbi h\u1ec7 th\u1ed1ng t\u1ec7p b\xean trong container."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Chia s\u1ebb:"})," C\xf3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng b\u1edfi nhi\u1ec1u container c\xf9ng l\xfac."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"2-bind-mount-l\xe0-g\xec",children:"2. Bind Mount l\xe0 g\xec?"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Bind Mount"})," l\xe0 c\xe1ch mount m\u1ed9t th\u01b0 m\u1ee5c c\u1ee5 th\u1ec3 t\u1eeb m\xe1y ch\u1ee7 (host) v\xe0o trong container."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Bind Mount"})," li\xean k\u1ebft tr\u1ef1c ti\u1ebfp m\u1ed9t th\u01b0 m\u1ee5c/t\u1ec7p t\u1eeb host v\xe0o container, kh\xf4ng \u0111\u01b0\u1ee3c Docker qu\u1ea3n l\xfd ch\u1eb7t ch\u1ebd nh\u01b0 volume."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Bind Mount"})," trong Docker \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng khi ta c\u1ea7n \xe1nh x\u1ea1 tr\u1ef1c ti\u1ebfp m\u1ed9t th\u01b0 m\u1ee5c ho\u1eb7c t\u1ec7p t\u1eeb h\u1ec7 th\u1ed1ng t\u1ec7p c\u1ee7a m\xe1y ch\u1ee7 (host) v\xe0o container. \u0110\xe2y l\xe0 m\u1ed9t c\xe1ch linh ho\u1ea1t \u0111\u1ec3 k\u1ebft n\u1ed1i d\u1eef li\u1ec7u gi\u1eefa host v\xe0 container, nh\u01b0ng n\xf3 kh\xe1c v\u1edbi volume \u1edf ch\u1ed7 kh\xf4ng \u0111\u01b0\u1ee3c Docker qu\u1ea3n l\xfd ho\xe0n to\xe0n. V\xed d\u1ee5 khi ta ch\u1ea1y project \u1edf m\xf4i tr\u01b0\u1eddng dev b\u1eb1ng Docker. Xem v\xed d\u1ee5 b\xean d\u01b0\u1edbi \u0111\u1ec3 hi\u1ec3u h\u01a1n."]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"3-so-s\xe1nh-volume-v\u1edbi-bind-mount",children:"3. So s\xe1nh Volume v\u1edbi Bind Mount"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Ti\xeau ch\xed"}),(0,t.jsx)(e.th,{children:"Volume"}),(0,t.jsx)(e.th,{children:"Bind Mount"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Qu\u1ea3n l\xfd b\u1edfi Docker"}),(0,t.jsx)(e.td,{children:"\u2705 C\xf3"}),(0,t.jsx)(e.td,{children:"\u274c Kh\xf4ng"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u0110\u01b0\u1eddng d\u1eabn"}),(0,t.jsx)(e.td,{children:"T\u1ef1 \u0111\u1ed9ng (/var/lib/...)"}),(0,t.jsx)(e.td,{children:"Ch\u1ec9 \u0111\u1ecbnh r\xf5 tr\xean m\xe1y host\xa0(/home/user/project)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u0110\u1ed9 an to\xe0n"}),(0,t.jsx)(e.td,{children:"Cao h\u01a1n"}),(0,t.jsx)(e.td,{children:"C\xf3 th\u1ec3 b\u1ecb xung \u0111\u1ed9t ho\u1eb7c l\u1ed7i"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"D\xf9ng trong dev"}),(0,t.jsx)(e.td,{children:"C\xf3 th\u1ec3"}),(0,t.jsx)(e.td,{children:"\u2705 Th\u01b0\u1eddng d\xf9ng"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"D\xf9ng trong production"}),(0,t.jsx)(e.td,{children:"\u2705 Khuy\u1ebfn ngh\u1ecb"}),(0,t.jsx)(e.td,{children:"Kh\xf4ng khuy\u1ebfn kh\xedch"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"4-v\xed-d\u1ee5-v\u1ec1-volume",children:"4. V\xed d\u1ee5 v\u1ec1 Volume"}),"\n",(0,t.jsx)(e.h3,{id:"v\xed-d\u1ee5-1-l\u01b0u-tr\u1eef-c\u01a1-s\u1edf-d\u1eef-li\u1ec7u-mysql",children:"V\xed d\u1ee5 1: L\u01b0u tr\u1eef c\u01a1 s\u1edf d\u1eef li\u1ec7u MySQL"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u0110\u1ea7u ti\xean, ta t\u1ea1o volume th\xf4ng qua c\xe2u l\u1ec7nh:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"docker volume create mysql-data\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Ti\u1ebfp theo, ta d\xf9ng volume trong container:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"docker run -d --name mysql-container \\\n  -v mysql-data:/var/lib/mysql \\\n  -e MYSQL_ROOT_PASSWORD=rootpassword \\\n  mysql:latest\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["T\u1ea1o m\u1ed9t container MySQL v\u1edbi volume ",(0,t.jsx)(e.code,{children:"mysql-data"})," \u0111\u1ec3 l\u01b0u tr\u1eef d\u1eef li\u1ec7u c\u01a1 s\u1edf d\u1eef li\u1ec7u."]}),"\n",(0,t.jsxs)(e.li,{children:["N\u1ebfu container b\u1ecb x\xf3a, d\u1eef li\u1ec7u trong ",(0,t.jsx)(e.code,{children:"mysql-data"})," v\u1eabn \u0111\u01b0\u1ee3c gi\u1eef nguy\xean v\xe0 c\xf3 th\u1ec3 g\u1eafn l\u1ea1i v\xe0o container m\u1edbi."]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"v\xed-d\u1ee5-2-chia-s\u1ebb-d\u1eef-li\u1ec7u-gi\u1eefa-c\xe1c-container",children:"V\xed d\u1ee5 2: Chia s\u1ebb d\u1eef li\u1ec7u gi\u1eefa c\xe1c container"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"V\xec volume \u0111\u01b0\u1ee3c qu\u1ea3n l\xfd b\u1edfi Docker v\xe0 kh\xf4ng ph\u1ee5 thu\u1ed9c v\xe0o container n\xe0o n\xean n\xf3 c\xf3 th\u1ec3 l\xe0 c\u1ea7u n\u1ed1i giao ti\u1ebfp d\u1eef li\u1ec7u gi\u1eefa c\xe1c containers v\u1edbi nhau."}),"\n",(0,t.jsx)(e.li,{children:"Sau \u0111\xe2y l\xe0 m\u1ed9t v\xed d\u1ee5:"}),"\n",(0,t.jsx)(e.li,{children:"\ud83d\udcc1 C\u1ea5u tr\xfac th\u01b0 m\u1ee5c:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-vbnet",children:"shared-volume/\n\u251c\u2500\u2500 writer/\n\u2502   \u251c\u2500\u2500 Dockerfile\n\u2502   \u2514\u2500\u2500 writer.sh\n\u251c\u2500\u2500 reader/\n\u2502   \u251c\u2500\u2500 Dockerfile\n\u2502   \u2514\u2500\u2500 reader.sh\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sh",metastring:'title="shared-volume/writer/writer.sh"',children:'#!/bin/sh\necho "Hello from writer at $(date)" >> /data/data.txt\nsleep infinity\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Dockerfile",metastring:'title="shared-volume/writer/Dockerfile"',children:'FROM alpine\nCOPY writer.sh /writer.sh\nRUN chmod +x /writer.sh\nCMD ["/writer.sh"]\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sh",metastring:'title="shared-volume/reader/reader.sh"',children:'#!/bin/sh\necho "Reader container is reading file:"\ncat /data/data.txt\nsleep infinity\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Dockerfile",metastring:'title="shared-volume/reader/Dockerfile"',children:'FROM alpine\nCOPY reader.sh /reader.sh\nRUN chmod +x /reader.sh\nCMD ["/reader.sh"]\n'})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\ud83d\udee0 Build image:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# T\u1eeb th\u01b0 m\u1ee5c g\u1ed1c shared-volume/\ndocker build -t writer-image ./writer\ndocker build -t reader-image ./reader\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\ud83e\uddea Ch\u1ea1y container v\xe0 chia s\u1ebb volume:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# T\u1ea1o volume d\xf9ng chung\ndocker volume create shared-data\n\n# Ch\u1ea1y writer (ghi v\xe0o file data.txt)\ndocker run -d --name writer-container -v shared-data:/data writer-image\n\n# Ch\u1ea1y reader (\u0111\u1ecdc t\u1eeb file data.txt)\ndocker run -d --name reader-container -v shared-data:/data reader-image\n"})}),"\n",(0,t.jsx)(e.admonition,{title:"K\u1ebft qu\u1ea3",type:"info",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Ch\u1ea1y l\u1ec7nh: ",(0,t.jsx)(e.code,{children:"docker logs reader-container"}),", ta s\u1ebd th\u1ea5y n\u1ed9i dung ",(0,t.jsx)(e.code,{children:"Hello from writer at ..."})," \u0111\u01b0\u1ee3c ghi b\u1edfi container ",(0,t.jsx)(e.code,{children:"writer"})," v\xe0 \u0111\u01b0\u1ee3c \u0111\u1ecdc b\u1edfi ",(0,t.jsx)(e.code,{children:"reader"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["M\u1ed7i khi ta thay \u0111\u1ed5i n\u1ed9i dung b\xean trong file ",(0,t.jsx)(e.code,{children:"/data/data.txt"})," (b\u1eb1ng c\xe1ch truy c\u1eadp v\xe0o container b\u1eb1ng l\u1ec7nh ",(0,t.jsx)(e.code,{children:"docker exec"})," v\xe0 s\u1eeda n\u1ed9i dung file), sau \u0111\xf3 \u1edf b\xean trong container ",(0,t.jsx)(e.code,{children:"reader-container"}),", ta th\u1ef1c hi\u1ec7n l\u1ea1i l\u1ec7nh ",(0,t.jsx)(e.code,{children:"cat /data/data.txt"}),", ta s\u1ebd th\u1ea5y n\u1ed9i dung \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt theo nh\u01b0 ta \u0111\xe3 s\u1eeda tr\u01b0\u1edbc \u0111\xf3."]}),"\n"]})}),"\n",(0,t.jsx)(e.h2,{id:"5-v\xed-d\u1ee5-v\u1ec1-bind-mount",children:"5. V\xed d\u1ee5 v\u1ec1 Bind Mount"}),"\n",(0,t.jsx)(e.h3,{id:"v\xed-d\u1ee5-1-ch\u1ea1y-project-nodejs-\u1edf-m\xf4i-tr\u01b0\u1eddng-dev-b\u1eb1ng-docker-k\xe8m-hot-reload-auto-restart-khi-code-thay-\u0111\u1ed5i",children:"V\xed d\u1ee5 1: Ch\u1ea1y project Nodejs \u1edf m\xf4i tr\u01b0\u1eddng dev b\u1eb1ng Docker k\xe8m hot reload (auto-restart khi code thay \u0111\u1ed5i)"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\ud83d\udcc1 C\u1ea5u tr\xfac th\u01b0 m\u1ee5c:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-vbnet",children:"node-docker-hotreload/\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 index.js\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "name": "node-docker-hotreload",\n  "version": "1.0.0",\n  "main": "index.js",\n  "scripts": {\n    "start": "nodemon index.js"\n  },\n  "dependencies": {},\n  "devDependencies": {\n    "nodemon": "^3.0.0"\n  }\n}\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="index.js"',children:'const http = require("http");\n\nconst server = http.createServer((req, res) => {\n  res.end(`Hello from Node.js! Time: ${new Date().toISOString()}`);\n});\n\nconst PORT = 3000;\nserver.listen(PORT, () => {\n  console.log(`Server running on port ${PORT}`);\n});\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Dockerfile",metastring:'title="Dockerfile"',children:'FROM node:18\n\n# Set working directory\nWORKDIR /app\n\n# Copy only package.json first to cache npm install\nCOPY package.json .\n\n# Install dependencies (including nodemon)\nRUN npm install\n\n# Copy source code\nCOPY . .\n\n# Expose the port\nEXPOSE 3000\n\n# Run app with nodemon for hot reload\nCMD ["npm", "start"]\n'})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\ud83c\udfc3\u200d\u2642\ufe0f Ch\u1ea1y v\u1edbi Docker + Bind Mount:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# Build image\ndocker build -t node-hotreload .\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# Run container v\u1edbi bind mount:\ndocker run -d \\\n  -p 3000:3000 \\\n  -v ${PWD}:/app \\\n  -v /app/node_modules \\\n  --name node-dev \\\n  node-hotreload\n"})}),"\n",(0,t.jsxs)(e.admonition,{type:"note",children:[(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\ud83d\udccc Gi\u1ea3i th\xedch:"}),"\n"]}),(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"-v ${PWD}:/app"}),": mount code t\u1eeb m\xe1y th\u1eadt v\xe0o container."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"-v /app/node_modules"}),": tr\xe1nh ghi \u0111\xe8 ",(0,t.jsx)(e.code,{children:"node_modules"})," c\u1ee7a container b\u1eb1ng th\u01b0 m\u1ee5c r\u1ed7ng tr\xean m\xe1y host."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"nodemon"})," s\u1ebd t\u1ef1 reload khi ta ch\u1ec9nh s\u1eeda ",(0,t.jsx)(e.code,{children:"index.js"}),"."]}),"\n"]})]}),"\n",(0,t.jsx)(e.h3,{id:"v\xed-d\u1ee5-2-bind-mount-mysql-data-t\u1eeb-th\u01b0-m\u1ee5c-t\u1eeb-m\xe1y-host-v\xe0o-container",children:"V\xed d\u1ee5 2: Bind Mount MySQL Data t\u1eeb th\u01b0 m\u1ee5c t\u1eeb m\xe1y host v\xe0o container"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u1ede ",(0,t.jsx)(e.a,{href:"#v%C3%AD-d%E1%BB%A5-1-l%C6%B0u-tr%E1%BB%AF-c%C6%A1-s%E1%BB%9F-d%E1%BB%AF-li%E1%BB%87u-mysql",children:"v\xed d\u1ee5 tr\u01b0\u1edbc"}),", ta \u0111\xe3 l\u01b0u tr\u1eef d\u1eef li\u1ec7u c\u1ee7a MySQL v\xe0o ",(0,t.jsx)(e.strong,{children:"Volume"})," c\u1ee7a Docker, b\xe2y gi\u1edd ta s\u1ebd l\u01b0u d\u1eef li\u1ec7u \u0111\xf3 ra m\u1ed9t th\u01b0 m\u1ee5c ri\xeang \u1edf m\xe1y host b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng ",(0,t.jsx)(e.strong,{children:"Bind Mount"}),"."]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"docker run -d --name mysql-container \\\n  -v ./db/mysql-data:/var/lib/mysql \\\n  -e MYSQL_ROOT_PASSWORD=rootpassword \\\n  mysql:latest\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\ud83d\udc49 Sau khi ch\u1ea1y c\xe2u l\u1ec7nh tr\xean, to\xe0n b\u1ed9 d\u1eef li\u1ec7u trong MySQL s\u1ebd \u0111\u01b0\u1ee3c l\u01b0u b\xean trong th\u01b0 m\u1ee5c ",(0,t.jsx)(e.code,{children:"./db/mysql-data"})," \u1edf m\xe1y host."]}),"\n",(0,t.jsx)(e.h2,{id:"6-c\xe1c-c\xe2u-l\u1ec7nh-cli-\u0111\u1ec3-qu\u1ea3n-l\xfd-volume",children:"6. C\xe1c c\xe2u l\u1ec7nh CLI \u0111\u1ec3 qu\u1ea3n l\xfd Volume"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"L\u1ec7nh"}),(0,t.jsx)(e.th,{children:"M\xf4 t\u1ea3"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"docker volume create [VOLUME_NAME]"})}),(0,t.jsx)(e.td,{children:"T\u1ea1o m\u1edbi m\u1ed9t volume"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"docker volume ls"})}),(0,t.jsx)(e.td,{children:"Xem danh s\xe1ch t\u1ea5t c\u1ea3 c\xe1c volume"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"docker volume rm [...VOLUME_NAME]"})}),(0,t.jsx)(e.td,{children:"X\xf3a m\u1ed9t ho\u1eb7c nhi\u1ec1u volume, m\u1ed7i volume c\xe1ch nhau b\u1edfi d\u1ea5u c\xe1ch"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"docker volume prune"})}),(0,t.jsxs)(e.td,{children:["X\xf3a h\u1ebft c\xe1c ",(0,t.jsx)(e.strong,{children:"anonymous volumes"})," (c\xe1c volumes kh\xf4ng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng b\u1edfi b\u1ea5t k\u1ef3 container n\xe0o)"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"docker volume prune -a"})}),(0,t.jsx)(e.td,{children:"X\xf3a h\u1ebft t\u1ea5t c\u1ea3 c\xe1c local volume"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"7-m\u1ed9t-s\u1ed1-l\u01b0u-\xfd",children:"7. M\u1ed9t s\u1ed1 l\u01b0u \xfd"}),"\n",(0,t.jsx)(e.admonition,{title:"L\u01b0u \xfd",type:"caution",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Khi s\u1eed d\u1ee5ng bind mount, h\xe3y t\u1ea1o file ",(0,t.jsx)(e.code,{children:".dockerignore"})," \u0111\u1ec3 tr\xe1nh copy to\xe0n b\u1ed9 th\u01b0 m\u1ee5c kh\xf4ng c\u1ea7n thi\u1ebft v\xe0o image."]}),"\n",(0,t.jsx)(e.li,{children:"Quy\u1ec1n truy c\u1eadp: \u0110\u1ea3m b\u1ea3o quy\u1ec1n \u0111\u1ecdc/ghi tr\xean volume ph\xf9 h\u1ee3p v\u1edbi container (\u0111\u1eb7c bi\u1ec7t khi d\xf9ng bind mount)."}),"\n",(0,t.jsxs)(e.li,{children:["D\u1ecdn d\u1eb9p: S\u1eed d\u1ee5ng ",(0,t.jsx)(e.code,{children:"docker volume prune"})," \u0111\u1ec3 x\xf3a c\xe1c volume kh\xf4ng c\xf2n s\u1eed d\u1ee5ng, tr\xe1nh chi\u1ebfm d\u1ee5ng dung l\u01b0\u1ee3ng."]}),"\n"]})})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>d,x:()=>l});var t=i(6540);const r={},c=t.createContext(r);function d(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);