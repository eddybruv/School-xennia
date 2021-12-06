/**
 * @file linked_list_stack.c
 * @author xennia316/ Sonia Amehmbo
 * @brief using linked list to implement stacks.
 * @version 0.1
 * @date 2021-12-02
 * 
 * @copyright Copyright (c) 2021 
 * 
 */
#include <stdio.h>
#include <stdlib.h>

struct Node
{
    int data;
    struct Node* next;
};

int nodesCount;

void push(struct Node **top, int x)
{
    struct Node* node = NULL;
    node = (struct Node*)malloc(sizeof(struct Node));
        if(!node)
        {
            printf("Heap Overflow\n");
            exit(-1);
        }
        printf("Adding %d\n", x);

        node -> data = x;

        node -> next = *top;

        *top = node;

        nodesCount += 1;
}

    int isEmpty(struct Node* top)
    {
        return top == NULL;
    }

    int peek(struct Node* top)
    {
        if (!isEmpty(top))
        {
            return top -> data;
        }
        else
        {
            printf("The stack is empty\n");
            exit(EXIT_FAILURE);
        }

      
    }

    int pop(struct Node** top)
    {
        struct Node *node;
        if(*top == NULL)
        {
            printf("Stack Underflow\n");
            
            exit(EXIT_FAILURE);
        }
          int x = peek(*top);
        printf("Taking out %d\n", x);

        node = *top;
        *top = (*top)->next;

        nodesCount -= 1 ;

        free(node);

        return x;

    }

    int sizeOfStack()
    {
        return nodesCount;
    }

    int main(void)
    {
        struct Node* top = NULL;

        push(&top, 1);
        push(&top, 2);
        push(&top, 3);

        printf("The top element is %d\n", peek(top));

        pop(&top);
        pop(&top);
        pop(&top);

        if (isEmpty(top))
    {
        printf("This stack is empty\n");

    }
    else
    {
        printf("This stack is not empty\n");
    }
            return 0;
    }
                                