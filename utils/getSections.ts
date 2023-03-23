// export function getSections(page?: any) {
//   const sections = page?.attributes?.sections?.reduce(
//     (accSections, section) => {
//       const sectionName =
//         section.__component.match(/\.(?<sectionName>.*)$/)?.groups
//           ?.sectionName ?? "";

//       if (!sectionName) {
//         return accSections;
//       }

//       return {
//         ...accSections,
//         [sectionName]: Array.isArray(section) ? section[0] : section,
//       };
//     },
//     {}
//   );

//   return sections ?? {};
// }
//;
