/**
 * @file  exercise_2.c
 * @author your name (you@domain.com)
 * @brief Answers to exercise 2 
 * @version 0.1
 * @date 2022-01-18
 * 
 * @copyright Copyright (c) 2022
 * 
 */
#include <stdio.h>
#include <stdlib.h>

void recursive(int n)
{
    if (n >= 0)
    {
        recursive(n - 1);
        printf("%d ", n);
        // recursive(n - 1);
    }
    return;
}

typedef struct poly
{
    int coef;
    int degree;
    struct poly *next;
}poly;

//creating the polynomial
poly * create_poly(poly *initial)
{
    int x, y;
    poly *new;
    new = malloc(sizeof(poly));

    printf("Enter coefficient and degree of polynomial: ");
    scanf("%d %d", &x, &y);

    new->coef = x;
    new->degree = y;

    new->next = initial;
    initial = new;
    //displaying the polynomial created
     while( initial != NULL)
    {
        printf("%d(x^%d) \n", x, y);
        initial = initial->next;
        // return new;
    }
    return new;
}

int main(void)
{
    int a;
    poly *element;
    element = NULL;

    printf("Enter a number: ");
    scanf("%d", &a);

    recursive(a);
    printf("\n");

   element = create_poly(element);

    return 0;
}
