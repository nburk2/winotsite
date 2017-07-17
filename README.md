# Wi-Not-Stop Website

### All Files are statically updated

#deploy with s3

1. npm init
2. gulp clean
3. gulp build
4. install aws cli to easily push to s3 bucket
5. aws s3 sync dist/ s3://winotstop.wineenergyportal.com --acl public-read

6. update individual file: aws s3api put-object --bucket winotstop.wineenergyportal.com --key css/all.css --body [local-file] --acl public-read


# deploy with ec2
1. npm init
2. gulp clean
3. gulp build
4. scp -r -i keyPATH localPATH user@ip:PATH
