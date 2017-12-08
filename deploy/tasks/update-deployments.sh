#!/bin/bash
set -eu

SCRIPT_DIR=$(cd $(dirname $0) && pwd)
source "${SCRIPT_DIR}/config.sh"

kubectl apply -f "${KUBE_DIR}/frontend.yaml"
kubectl apply -f "${KUBE_DIR}/sidekiq.yaml"
kubectl apply -f "${KUBE_DIR}/jobcron.yaml"
