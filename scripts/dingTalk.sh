#!/bin/bash

set -e

url='https://oapi.dingtalk.com/robot/send?access_token=0bdc432c1e8214ca0a7d1717c0b7ddea1368c15217bc4778f79b4621cc2af395';
author=$(git show -s --pretty=%an)

content="""$JOB_NAME 由 $author 在 $GIT_BRANCH 分支的 $1 成功啦
====================
$BUILD_URL
"""

echo "$content"

generate_post_data(){
  cat <<EOF
{
  "msgtype": "text",
  "text": {
    "content": "$content"
  }
}
EOF
}

curl --request POST \
  --header "Content-Type: application/json" \
  --data "$(generate_post_data)" \
  $url


