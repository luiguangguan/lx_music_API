"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigationUrlWhiteList = exports.windowSizeList = void 0;
exports.windowSizeList = [
    {
        id: 0,
        name: 'smaller',
        width: 828,
        height: 540,
    },
    {
        id: 1,
        name: 'small',
        width: 920,
        height: 600,
    },
    {
        id: 2,
        name: 'medium',
        width: 1020,
        height: 660,
    },
    {
        id: 3,
        name: 'big',
        width: 1114,
        height: 718,
    },
    {
        id: 4,
        name: 'larger',
        width: 1202,
        height: 776,
    },
    {
        id: 5,
        name: 'oversized',
        width: 1385,
        height: 896,
    },
    {
        id: 6,
        name: 'huge',
        width: 1700,
        height: 1070,
    },
];
exports.navigationUrlWhiteList = [];
// 基础黑白色
// export const commonColorNames = [
//   '--color-000', '--color-050', '--color-100', '--color-200', '--color-300', '--color-400',
//   '--color-500', '--color-600', '--color-700', '--color-800', '--color-900',
// ] as const
// export const commonLightColorValues = [
//   'rgb(255, 255, 255)',
//   'rgb(217,217,217)',
//   'rgb(184,184,184)',
//   'rgb(156,156,156)',
//   'rgb(133,133,133)',
//   'rgb(113,113,113)',
//   'rgb(96,96,96)',
//   'rgb(82,82,82)',
//   'rgb(70,70,70)',
//   'rgb(60,60,60)',
//   'rgb(51,51,51)',
// ] as const
// export const commonDarkColorValues = [
//   'rgb(11, 11, 11)',
//   'rgb(60,60,60)',
//   'rgb(99,99,99)',
//   'rgb(130,130,130)',
//   'rgb(155,155,155)',
//   'rgb(175,175,175)',
//   'rgb(191,191,191)',
//   'rgb(204,204,204)',
//   'rgb(214,214,214)',
//   'rgb(222,222,222)',
//   'rgb(229,229,229)',
// ] as const
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1vbi9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBT2EsUUFBQSxjQUFjLEdBQWlCO0lBQzFDO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsU0FBUztRQUNmLEtBQUssRUFBRSxHQUFHO1FBQ1YsTUFBTSxFQUFFLEdBQUc7S0FDWjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsT0FBTztRQUNiLEtBQUssRUFBRSxHQUFHO1FBQ1YsTUFBTSxFQUFFLEdBQUc7S0FDWjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRSxJQUFJO1FBQ1gsTUFBTSxFQUFFLEdBQUc7S0FDWjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsS0FBSztRQUNYLEtBQUssRUFBRSxJQUFJO1FBQ1gsTUFBTSxFQUFFLEdBQUc7S0FDWjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRSxJQUFJO1FBQ1gsTUFBTSxFQUFFLEdBQUc7S0FDWjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsV0FBVztRQUNqQixLQUFLLEVBQUUsSUFBSTtRQUNYLE1BQU0sRUFBRSxHQUFHO0tBQ1o7SUFDRDtRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLE1BQU07UUFDWixLQUFLLEVBQUUsSUFBSTtRQUNYLE1BQU0sRUFBRSxJQUFJO0tBQ2I7Q0FDRixDQUFBO0FBRVksUUFBQSxzQkFBc0IsR0FBYSxFQUFFLENBQUE7QUFFbEQsUUFBUTtBQUNSLG9DQUFvQztBQUNwQyw4RkFBOEY7QUFDOUYsK0VBQStFO0FBQy9FLGFBQWE7QUFDYiwwQ0FBMEM7QUFDMUMsMEJBQTBCO0FBQzFCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQixhQUFhO0FBQ2IseUNBQXlDO0FBQ3pDLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsYUFBYSJ9