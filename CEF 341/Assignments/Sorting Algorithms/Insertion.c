/**
 * @file Insertion.c
 * @author xennia316
 * @brief Sorting by insertion.
 * @version 0.1
 * @date 2021-12-05
 * 
 * @copyright Copyright (c) 2021
 * 
 */
#include <stdio.h>
#include <math.h>

void insertionSort(int arr[], int p)
{
    int i;
    int j;
    int item;

    for(i = 1; i < p; i++)
    {
        item = arr[i];
        j = i - 1;
        while(j >= 0 && arr[j] > item)
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = item;
    }
}

        void printArray(int arr[], int p)
        {
            int i;
            for(i = 0; i < p; i++)
            printf("%d ", arr[i]);
            printf("\n\n");

        }

        int main(void)
        {
            int arr[] = {12, -2, 33, 316, 52, 38};
            int p = sizeof(arr) / sizeof(arr[0]);
            insertionSort(arr, p);
            printArray(arr, p);
            return 0;
        }
    