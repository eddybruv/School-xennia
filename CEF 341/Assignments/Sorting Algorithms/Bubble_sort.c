/**
 * @file Buble_sort.c
 * @author xennia316/ Amehmbo Ngewung Sonia
 * @brief sorting algorithms with the buble sort method.
 * @version 0.1
 * @date 2021-12-05
 * 
 * @copyright Copyright (c) 2021
 * 
 */
#include <stdio.h>

void swap( int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b =  temp;
}
// This function permutes the elements a and b

void bubbleSort (int arr[], int p)
{
    int i;
    int j;
        for( i = 0; i < p-1; i++)
        for( j = 0; j < p-i-1; j++)
            if( arr[j]> arr[j + 1])
            swap( &arr[j], &arr[j+1]);
}
// This is the bubble sort function that swaps adjacent values when wrongly placed.
void output(int arr[], int size)
{
    int i;
    for( i = 0; i < size; i++)
    printf(" %d ", arr[i]);
    printf("\n\n");
}

int main(void)
{
    int arr[] = {100, -34, 16, 5, 90, 1000, 100, 3, 2, 316};
    int size = sizeof(arr) / sizeof(arr[0]);
    bubbleSort(arr, size);
    printf("The sorted array is as follows: ");
    output(arr, size);

    return 0;

}