node {
    def nodeHome = tool name: 'node-6.9.5', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    env.PATH = "${nodeHome}/bin:${env.PATH}"

    stage('check tools') {
        sh "node -v"
        sh "npm -v"
    }

    stage('checkout') {
        checkout scm
    }

    stage('npm install') {
        sh "npm install"
    }

    stage('unit tests') {
        sh "./node_modules/.bin/ng test --watch false"
    }

    stage('protractor tests') {
        sh '''./node_modules/.bin/ng serve &
        ngPid=$!
        sleep 15s
        npm run e2e
        kill $ngPid
        '''
    }
}