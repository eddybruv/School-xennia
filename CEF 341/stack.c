#include <stdio.h>

int MAXSIZE = 10;
int stack[10];
int top = -1;

int isfull(void);
int isempty(void);
int push(int );
int pop(void);
int peak(void); 

int main(void){
    //push items unto the stack
    push(3);
    push(5);
    push(9);
    push(1);
    push(12);
    push(15);


    //printf("Element at top of the stack: %d\n", peak());
    printf("Elements: \n");

    // print stack data
    while(!isempty()){
        int data = pop();
        printf("%d\n", data);

    }

    printf("Stack full: %s\n", isfull()?"true":"false");
    printf("Stack empty: %s\n", isempty()?"true":"false");

    return 0;
}

int isempty(){

    if (top == -1)
       return 1;
    else 
       return 0;
}

int push(int data) {
    if(!isfull()) {
        top = top +1;
        stack[top] = data;
    } else {
        printf("Could not insert data, Stack is full. \na");
    }
}

int isfull(){

    if(top == MAXSIZE)
       return 1;

    else 
        return 0;
}

int peak(){
    return stack[top];

}

int pop(){

    int data;

    if(!isempty()){
        data = stack[top];
        top = top - 1;
        return data;
    } else{
        printf("Could not retrieve data, Stack is empty.\n");

    }
}
