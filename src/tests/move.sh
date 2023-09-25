#!/usr/bin/bash

# Create test folder for each subdirectory
for dir in ../api/*/; do mkdir -- "../api/$dir/test"; done

# Move all files to test folder
for f in *.ts; do
  [[ -f "$f" ]] || continue # skip if not regular file
#   echo "${f%.*.*}"
  dir="${f%.*.*}"
  mv "$f" "../api/$dir/test"
done
