# ---- Production Stage ----
FROM nginx:alpine

# Copy built assets from Jenkins build stage
COPY build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
