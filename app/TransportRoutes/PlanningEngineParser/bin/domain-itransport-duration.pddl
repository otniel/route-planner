;; First version of Revised Transportation Domain.
;; This version only considers actions’ durations. 
;; In consequence, only allows the minimization of makespan. 
(define (domain iTransport)
	(:requirements :typing :fluents :durative-actions)

	(:types
		locatable - object
		location - object
		route - object 
		direction - object
		passenger - locatable 
		bus - locatable
	)

	(:predicates
		;;Defines a road segment between two (interconnected) locations
		(road ?p1 ?p2 - location)

		;;Identifies the road segments that are traversable for a given route and direction
		(available-road ?p1 ?p2 - location ?r - route ?d - direction)

		;;Identifies the driving direction of a given bus
		(bus-direction ?b - bus ?d - direction)

		;;Defines the routes for each bus
		(bus-fleet ?b - bus ?r - route)

		;;Identifies if a given passenger is in a given bus
		(in ?b - bus ?p - passenger)

		;;Identifies if a bus or a passenger are at a given location
		(at ?l - location ?o - locatable) 
	)

	(:functions
		;;Function to determine the driving duration between two locations
		(driving-duration ?l1 ?l2 - location)

		;;Function to determine the walking duration between two locations
		(walking-duration ?l1 ?l2 - location)

		;;Function to determine the duration for ascending to a bus
		(ascending-duration)

		;;Function to determine the duration for descending from a bus
		(descending-duration)
	)

	;;Walk Action: a passenger can traverse the road network freely
	(:durative-action walk
		:parameters (?l1 ?l2 - location ?p - passenger)
		:duration (= ?duration (walking-duration ?l1 ?l2))
		:condition(and
			(at start (road ?l1 ?l2))
			(at start(at ?l1 ?p))
			)
		:effect(and
			
			(at start(not(at ?l1 ?p)))
			(at end (at ?l2 ?p))
			)
	)		

	;;Action to ascend a bus for a given passenger at a given location
	(:durative-action get-on-bus
		:parameters(?b - bus ?p - passenger ?l - location)
		:duration (= ?duration (ascending-duration))
		:condition(and
				(at start(at ?l ?p))
				(at start(at ?l ?b))
				(over all(at ?l ?b)) 
				)
			:effect(and
				(at start(not(at ?l ?p)))
				(at end(in ?b ?p))
				)
	)	

	;;Action for descending from a bus at a given location
	(:durative-action get-off-bus
		:parameters (?b - bus ?p - passenger ?l - location)
		:duration (= ?duration (descending-duration))
		:condition(and
			(at start(at ?l ?b))
			(over all(at ?l ?b)) 
			(at start(in ?b ?p))
			)
		:effect(and
			(at start(not (in ?b ?p)))
			(at end(at ?l ?p))
			)
	)

	;;Action that involves movement of buses. 
	(:durative-action drive
		:parameters(?b - bus ?r - route ?l1 ?l2 - location ?d - direction)
		:duration (= ?duration (driving-duration ?l1 ?l2))
		:condition(and
			(at start (road ?l1 ?l2))
			(at start (available-road ?l1 ?l2 ?r ?d))
			(at start (bus-fleet ?b ?r))
			(at start (bus-direction ?b ?d))
			(at start(at ?l1 ?b))
			)
		:effect(and
			(at start (not (at ?l1 ?b)))
			(at end (at ?l2 ?b))	
			)
	)
)
