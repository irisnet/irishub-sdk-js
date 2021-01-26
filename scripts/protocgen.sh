#!/usr/bin/env bash

set -eo pipefail

proto_dirs=$(find ./proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
# echo $proto_dirs;
for dir in $proto_dirs; do
  protoc \
  -I "./proto/third_party" \
  -I "./proto" \
  --js_out=import_style=commonjs,binary:./src/types/proto-types\
  $(find "${dir}" -maxdepth 1 -name '*.proto')

  # command to generate gRPC web (*_grpc_web_pb.js in respective modules) files
  protoc \
  -I "./proto/third_party" \
  -I "./proto" \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src/types/proto-types\
  $(find "${dir}" -maxdepth 1 -name '*.proto')

done
