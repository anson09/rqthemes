#!/usr/bin/env groovy
pipeline {
    agent any

    stages {
            stage('Build') {
                steps {
                    sh "rm -rf dist"
                    sh "npm run build"
                    sh "npx parcel build demo/index.html --public-url=/rqthemes/ --no-cache --no-minify"
                }
            }
            stage('Deploy') {
                steps {
                    sh "rsync -aczvh --stats --delete -e 'ssh -p 28888' dist/ jenkins@anka.ricequant.com:/static/st/rqthemes"
                }
            }
    }

    post {
        unstable {
            mail (to: "anson@ricequant.com",
                  subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
                  body: "Something is wrong with ${env.BUILD_URL}")
        }
    }
}