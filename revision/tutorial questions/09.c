/**
 * @file 09.c
 * @author @xennia316
 * @brief Recursive binary search
 * @version 0.1
 * @date 2022-01-19
 * 
 * @copyright Copyright (c) 2022
 * 
 */

int binary_search(int arr[], int l, int r, int x)
{
    if (r >= 1)
    {
        int mid = 1 + (r - 1);
        if (arr[mid] == x)
            return mid;
        if (arr[mid] > x)
            return binary_search(arr, l, mid - 1, x);
        return binary_search(arr, mid + 1, r, x);
    }
}