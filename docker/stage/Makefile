build :
	mkdir -p app/srv
	cp -r ../../srv/*.js app/srv
	docker build -t nodezoo-repl:1 .
	docker build -t nodezoo-repl-prod:1 -f Dockerfile-prod .

clean :
	rm *~

.PHONY : build clean
