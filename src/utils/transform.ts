type SemesterNumber = 1 | 2 | null;

/**
 * Transforms a string to a SemesterNumber.
 * @param semester - The semester string.
 * @returns The semester number.
 * @example
 * semesterNumberFromString("1. pololetí") // 1
 * semesterNumberFromString("2. pololetí") // 2
 */
export function semesterNumberFromString(semester: string): SemesterNumber {
  if (!semester || semester.length === 0) return null;

  const semesterNumber = semester.split(" ")[0];

  return parseInt(semesterNumber) as SemesterNumber;
}
