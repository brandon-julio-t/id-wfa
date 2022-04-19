import fs from 'fs';
import path from 'path';

import { prettierFormat } from '../../prettier';
import { companies } from '../constants';
import { getSmartRecruitersJobOpenings } from './helpers/getSmartRecruitersJobOpenings';

const companyName = 'Ajaib';
const company = companies.find((c) => c.name === companyName);

export const scrape = async () => {
  if (!company) return;

  const jobOpenings = (
    await getSmartRecruitersJobOpenings(company, 'Ajaib')
  ).filter((j) => {
    return Boolean(j.departmentName) && j.location === 'id';
  });

  const output = prettierFormat(
    `
    import { JobOpening } from '../../../../lib/types'

    export const ${companyName}_JOBS: JobOpening[] = ${JSON.stringify(
      jobOpenings,
    )}
  `,
  );

  fs.writeFileSync(path.join(__dirname, 'static', `${companyName}.ts`), output);
};
