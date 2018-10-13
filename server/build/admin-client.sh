#!/bin/bash
cd
cd HyperledgerComposers/
cd ExchangeApp/server/exchange/
echo "Starting composer rest server for admin at port 3001"
composer-rest-server -c admin@exchange -p 3001 -n never
