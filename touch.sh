#!/bin/sh
echo `date +%s` > touch
/usr/bin/git commit -am "Touch"
/usr/bin/git push