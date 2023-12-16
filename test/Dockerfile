#======================================================================================================================
# node.js
#======================================================================================================================
FROM node:20.8-bullseye as nodejs

WORKDIR /work

COPY ./package.json .
COPY ./package-lock.json .

RUN ls -l

RUN npm install -g npm@10.2.5
RUN npm install

#======================================================================================================================
# runtime
#======================================================================================================================
FROM node:20.8-bullseye as run

WORKDIR /test

# 前タスクのnode.jsから持ってくる
# vite-projectディレクトリのものをwork配下にコピーするという記述`
COPY ./src ./src
COPY ./svelte.config.js .
COPY ./vite.config.ts .
COPY ./tsconfig.json .
COPY ./.env .

RUN ls -l

COPY --from=nodejs /work/node_modules /test/node_modules
COPY --from=nodejs /work/package.json /test/package.json
RUN mkdir static
RUN ls -l
RUN npm run smui:create

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]