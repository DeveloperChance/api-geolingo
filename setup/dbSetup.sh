#!/bin/bash
set -e
service mysql start
mysql < /setup/dbSetup.sql
service mysql stop