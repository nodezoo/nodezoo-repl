build :
	mkdir -p app/srv
	cp -r ../../srv/*.js app/srv
	docker build -t nodezoo-repl .

clean :
	rm *~

.PHONY : build clean
