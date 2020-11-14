# 加载基础镜像
FROM mhart/alpine-node

LABEL maintainer = "shadow <wuh131420@gmail.com>"

# 创建工作目录
RUN rm -rf /work
RUN mkdir /work
WORKDIR /work

# 安装项目依赖
COPY . /work
RUN npm install
RUN npm run build

EXPOSE 3100

CMD npm run start 

