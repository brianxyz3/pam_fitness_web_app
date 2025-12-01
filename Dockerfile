# ---- Production Stage ----
FROM nginx:alpine

RUN npm --version

# Copy built assets from Jenkins build stage
COPY dist /usr/share/nginx/html

RUN cat /etc/nginx/conf.d/default.conf

# Copy custom nginx config (proxy to FastAPI private EC2)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
