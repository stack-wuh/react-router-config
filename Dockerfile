# 加载基础镜像
FROM mhart/alpine-node

LABEL maintainer = "shadow <wuh131420@gmail.com>"

# 指定工作目录
WORKDIR /usr/src/app

# 创建工作目录
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

# 安装项目依赖
COPY . /usr/src/app
RUN npm install
RUN npm run build

EXPOSE 3100

CMD npm run start 

