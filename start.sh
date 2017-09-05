docker build -t leah-react-server .
docker run --rm \
    --name leah-react-server \
    -p 80:80 \
    leah-react-server