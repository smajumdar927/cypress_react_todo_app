pipeline {
    agent{
        docker{
            image : cypress/base:16.13.0
        }
    }
}

stages {
    stage ('Download the dependencies'){
        steps {
            sh "npm install"
        }
    }
}
stages {
    stage ('build and test'){
        steps {
            sh "npm run build:and:test"
        }
    }
}