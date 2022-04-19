import { Company } from '../../lib/types';

export const companies: ReadonlyArray<Company> = [
  {
    name: 'Pinhome',
    jobOpeningsUrl: 'https://jobs.ashbyhq.com/Pinhome/',
    imageUrl:
      'https://app.ashbyhq.com/api/images/org-theme-wordmark/1bfdaaee-e805-43cb-85a6-17c4eced17f8/855b6de7-3c4d-4b94-9ae3-02fc8a44c87c.png',
  },
  {
    name: 'eFishery',
    jobOpeningsUrl: 'https://efishery.com/en/job-search/',
    imageUrl:
      'https://efishery.com/wp-content/uploads/2021/10/logo-colored.png',
  },
  {
    name: 'Pahamify',
    jobOpeningsUrl: 'https://pahamify.com/career/',
    imageUrl:
      'https://d1fdloi71mui9q.cloudfront.net/QzVygerQReyNJjz9EezH_1aOIXRSE4YoDmKP5',
    jobOpeningsFeedUrl: 'https://stg.pahamify.com/career/feed/',
  },

  // Skipping Amar Bank for now because they don't seem to have a dedicated
  // Job opening detail page. They just have a bunch of mailto:* links
  // {
  //   name: 'Amar Bank',
  //   jobOpeningsUrl: '',
  //   imageUrl: '',
  // },

  // Skipping because this one requires XSRF token
  // {
  //   name: 'Sekolah.mu',
  //   jobOpeningsUrl: 'https://jobs.talentics.id/sekolahmu',
  //   imageUrl: 'https://cdn.sekolah.mu/assets/home/sekolahmu_logo.svg',
  // },
  {
    name: 'CoLearn',
    jobOpeningsUrl: 'https://kelas.colearn.id/career/',
    imageUrl:
      'https://s3-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/610/400/resized/CL_Logo_Blue.png?1608617510',
  },
  {
    name: 'Qasir.id',
    jobOpeningsUrl: 'https://www.qasir.id/career',
    imageUrl:
      'https://global-uploads.webflow.com/5f17b3a6740e17c63ab5e642/60235cc90389675a2a31abbb_qasir-logo.svg',
  },
  {
    name: 'Finantier',
    jobOpeningsUrl: 'https://finantier.co/careers/',
    imageUrl: 'https://finantier.co/img/logo-navbar.png',
  },
  {
    name: 'ALAMI',
    jobOpeningsUrl: 'https://alamisharia.co.id/en/career/',
    imageUrl:
      'https://alamisharia.co.id/wp-content/themes/alami/images/logo/alami.svg',
  },
  {
    name: 'BukuWarung',
    jobOpeningsUrl: 'https://bukuwarung.com/career/',
    imageUrl:
      'https://cdn.bukuwarung.com/wp-content/themes/generatepress-child/assets/images/logo.png',
  },
  {
    name: 'Flip.id',
    jobOpeningsUrl: 'https://career.flip.id/jobs',
    imageUrl:
      'https://s3.amazonaws.com/files.freshteam.com/production/47295/attachments/2001341472/logo/flip_logo.png',
  },
  {
    name: 'Moladin',
    jobOpeningsUrl: 'https://moladin.com/careers/vacancies',
    imageUrl: 'https://cdn.moladin.com/static-images/b2c/logo.svg',
  },
  {
    name: 'HappyFresh',
    jobOpeningsUrl: 'https://careers.happyfresh.com/',
    imageUrl:
      'https://d12man5gwydfvl.cloudfront.net/wp-content/themes/stockholm/img/marco/images/logo.svg',
  },

  // Skipping TADA because their jobs seems to be hybrid remote, not fully remote (WFA)
  // {
  //   name: 'TADA',
  //   jobOpeningsUrl: '',
  //   imageUrl: '',
  // },

  // Skipping influx because it doesn't seem to be a Indonesian company
  // {
  //   name: 'Influx',
  //   jobOpeningsUrl: '',
  //   imageUrl: '',
  // },

  {
    name: 'Ajaib',
    jobOpeningsUrl: 'https://career.ajaib.co.id/jobs/',
    imageUrl:
      'https://ajaib-wp-s3-artifact.s3.ap-southeast-1.amazonaws.com/prd/wp-content/uploads/2020/03/cropped-new_ajaib_logo.png',
  },
  {
    name: 'Kata.ai',
    jobOpeningsUrl: 'https://careers.smartrecruiters.com/Kataai',
    imageUrl:
      'https://pbs.twimg.com/profile_images/1467776542327468035/aF7cjsHe_400x400.jpg',
  },
  {
    name: 'Bibit',
    jobOpeningsUrl: '',
    imageUrl: '',
  },
  {
    name: 'Tiket.com',
    jobOpeningsUrl: '',
    imageUrl: '',
  },
] as const;
