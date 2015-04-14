<?php

$route = shell_exec('./bin/sgplan522 -o bin/domain-itransport-duration.pddl -f bin/p01-itrans-duration.pddl');

echo $route;
