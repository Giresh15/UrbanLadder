FROM mysql:8.0

# Environment variables
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=urban_ladder

# Copy SQL file to auto-run on container startup
COPY Urban_ladder.sql /docker-entrypoint-initdb.d/

# Expose MySQL port
EXPOSE 3306