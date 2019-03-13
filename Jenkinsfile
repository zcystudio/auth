pipeline {
  agent {
    docker 'node:8.11.4'
  }

  stages {
    stage('Build') {
      steps {
        echo 'Building..'
        sh 'env'
        sh 'scripts/build.sh'
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
        sh 'scripts/dingTalk.sh deploy'
      }
    }
  }
}
