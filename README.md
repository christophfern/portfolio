# portfolio

### Building and deploying

gradle bootJar docker build --no-cache -t grc.io/personal-website-97234/portfolio . docker push
gcr.io/personal-website-97234/portfolio

gcloud run deploy personal-website \
--image gcr.io/personal-website-97234/portfolio

### tear down

gcloud run services delete personal-website
