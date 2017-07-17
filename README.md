# Wi-Not-Stop Website

### All Files are statically updated

#deploy with s3

1. npm init
2. gulp clean
3. gulp build
4. install aws cli to easily push to s3 bucket
5. Develop: aws s3 sync dist/ s3://winotstop.wineenergyportal.com --acl public-read
Production: aws s3 sync dist/ s3://www.winotstop.com --acl public-read
