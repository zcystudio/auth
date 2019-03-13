pipeline {
  agent {
    docker 'node:8.11.4'
  }

  stages {
    stage('Build') {
      steps {
        echo 'Building..'
        sh 'env'
        sh 'jenkins_scripts/build.sh'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing..'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying....'
      }
    }
    stage('dingTalk Notification') {
      steps {
        sh 'jenkins_scripts/dingTalk.sh deploy'
      }
    }
  }
}
