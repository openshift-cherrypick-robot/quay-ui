import {mock} from '../../MockAxios';

const noSeverityFeatures = [
  {
    Name: 'trousers-lib',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:76c3fc91354b01af7567241f118c944f5f4ca3ba2de10829d6cdd2066c760c34',
    Version: '0.3.15-1.el8',
    Vulnerabilities: [],
  },
  {
    Name: 'centos-gpg-keys',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:76c3fc91354b01af7567241f118c944f5f4ca3ba2de10829d6cdd2066c760c34',
    Version: '1:8-3.el8',
    Vulnerabilities: [],
  },
  {
    Name: 'less',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:a1d0c75327776413fa0db9ed3adcdbadedc95a662eb1d360dad82bb913f8a1d1',
    Version: '530-1.el8',
    Vulnerabilities: [],
  },
  {
    Name: 'libselinux',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:a1d0c75327776413fa0db9ed3adcdbadedc95a662eb1d360dad82bb913f8a1d1',
    Version: '2.9-5.el8',
    Vulnerabilities: [],
  },
  {
    Name: 'libX11-xcb',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:76c3fc91354b01af7567241f118c944f5f4ca3ba2de10829d6cdd2066c760c34',
    Version: '1.6.8-4.el8',
    Vulnerabilities: [],
  },
  {
    Name: 'kbd-misc',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:76c3fc91354b01af7567241f118c944f5f4ca3ba2de10829d6cdd2066c760c34',
    Version: '2.0.4-10.el8',
    Vulnerabilities: [],
  },
  {
    Name: 'ncurses-libs',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:a1d0c75327776413fa0db9ed3adcdbadedc95a662eb1d360dad82bb913f8a1d1',
    Version: '6.1-7.20180224.el8',
    Vulnerabilities: [],
  },
  {
    Name: 'python3-dnf',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:a1d0c75327776413fa0db9ed3adcdbadedc95a662eb1d360dad82bb913f8a1d1',
    Version: '4.4.2-11.el8',
    Vulnerabilities: [],
  },
  {
    Name: 'chkconfig',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:a1d0c75327776413fa0db9ed3adcdbadedc95a662eb1d360dad82bb913f8a1d1',
    Version: '1.13-2.el8',
    Vulnerabilities: [],
  },
  {
    Name: 'lz4-libs',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:76c3fc91354b01af7567241f118c944f5f4ca3ba2de10829d6cdd2066c760c34',
    Version: '1.8.3-3.el8_4',
    Vulnerabilities: [],
  },
  {
    Name: 'dbus-common',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:76c3fc91354b01af7567241f118c944f5f4ca3ba2de10829d6cdd2066c760c34',
    Version: '1:1.12.8-12.el8_4.2',
    Vulnerabilities: [],
  },
  {
    Name: 'ima-evm-utils',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:a1d0c75327776413fa0db9ed3adcdbadedc95a662eb1d360dad82bb913f8a1d1',
    Version: '1.3.2-12.el8',
    Vulnerabilities: [],
  },
  {
    Name: 'qemu-kvm-block-rbd',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:76c3fc91354b01af7567241f118c944f5f4ca3ba2de10829d6cdd2066c760c34',
    Version: '15:4.2.0-48.module_el8.4.0+885+5e18b468.3',
    Vulnerabilities: [],
  },
  {
    Name: 'libnl3',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:a1d0c75327776413fa0db9ed3adcdbadedc95a662eb1d360dad82bb913f8a1d1',
    Version: '3.5.0-1.el8',
    Vulnerabilities: [],
  },
  {
    Name: 'iso-codes',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:76c3fc91354b01af7567241f118c944f5f4ca3ba2de10829d6cdd2066c760c34',
    Version: '3.79-2.el8',
    Vulnerabilities: [],
  },
  {
    Name: 'libffi',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:a1d0c75327776413fa0db9ed3adcdbadedc95a662eb1d360dad82bb913f8a1d1',
    Version: '3.1-22.el8',
    Vulnerabilities: [],
  },
  {
    Name: 'boost-date-time',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:76c3fc91354b01af7567241f118c944f5f4ca3ba2de10829d6cdd2066c760c34',
    Version: '1.66.0-10.el8',
    Vulnerabilities: [],
  },
  {
    Name: 'libwayland-cursor',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:76c3fc91354b01af7567241f118c944f5f4ca3ba2de10829d6cdd2066c760c34',
    Version: '1.17.0-1.el8',
    Vulnerabilities: [],
  },
  {
    Name: 'platform-python',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:a1d0c75327776413fa0db9ed3adcdbadedc95a662eb1d360dad82bb913f8a1d1',
    Version: '3.6.8-37.el8',
    Vulnerabilities: [],
  },
  {
    Name: 'libgcrypt',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:a1d0c75327776413fa0db9ed3adcdbadedc95a662eb1d360dad82bb913f8a1d1',
    Version: '1.8.5-4.el8',
    Vulnerabilities: [],
  },
];

const criticalSeverityFeatures = [
  {
    Name: 'libbz2',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:940580c848a703886ff3e6f8ce4f9e7e876c4362c174f3152a8255a6431f4ab9',
    Version: '1.0.6-r6',
    Vulnerabilities: [
      {
        Severity: 'Critical',
        NamespaceName: 'alpine-main-v3.9-updater',
        Link: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-12900',
        FixedBy: '1.0.6-r7',
        Description: '',
        Name: 'CVE-2019-12900',
        Metadata: {
          UpdatedBy: 'alpine-main-v3.9-updater',
          RepoName: null,
          RepoLink: null,
          DistroName: 'Alpine Linux',
          DistroVersion: '',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
              Score: 9.8,
            },
          },
        },
      },
    ],
  },
  {
    Name: 'musl',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:a4c1e43a7431a562d92c5eb6e09e96b4731a474af51cad1c46e2d305ede29005',
    Version: '1.1.20-r3',
    Vulnerabilities: [
      {
        Severity: 'Critical',
        NamespaceName: 'alpine-main-v3.9-updater',
        Link: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14697',
        FixedBy: '1.1.20-r5',
        Description: '',
        Name: 'CVE-2019-14697',
        Metadata: {
          UpdatedBy: 'alpine-main-v3.9-updater',
          RepoName: null,
          RepoLink: null,
          DistroName: 'Alpine Linux',
          DistroVersion: '',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
              Score: 9.8,
            },
          },
        },
      },
    ],
  },
  {
    Name: 'musl-utils',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:a4c1e43a7431a562d92c5eb6e09e96b4731a474af51cad1c46e2d305ede29005',
    Version: '1.1.20-r3',
    Vulnerabilities: [
      {
        Severity: 'Critical',
        NamespaceName: 'alpine-main-v3.9-updater',
        Link: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14697',
        FixedBy: '1.1.20-r5',
        Description: '',
        Name: 'CVE-2019-14697',
        Metadata: {
          UpdatedBy: 'alpine-main-v3.9-updater',
          RepoName: null,
          RepoLink: null,
          DistroName: 'Alpine Linux',
          DistroVersion: '',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
              Score: 9.8,
            },
          },
        },
      },
    ],
  },
];

const highSeverityFeatures = [
  {
    Name: 'gzip',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:57fce60a81bf84e6b61ce2b64643c9e4c61da77869b95e0641360b42429c0cff',
    Version: '1.9-12.el8',
    Vulnerabilities: [
      {
        Severity: 'High',
        NamespaceName: 'RHEL8-rhel-8.4-eus',
        Link: 'https://access.redhat.com/errata/RHSA-2022:1676 https://access.redhat.com/security/cve/CVE-2022-1271',
        FixedBy: '0:1.9-13.el8_4',
        Description:
          'The gzip packages contain the gzip (GNU zip) data compression utility. gzip is used to compress regular files. It replaces them with files containing the .gz extension, while retaining ownership modes, access, and modification times.\n\nSecurity Fix(es):\n\n* gzip: arbitrary-file-write vulnerability (CVE-2022-1271)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.',
        Name: 'RHSA-2022:1676: gzip security update (Important)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8.4-eus',
          RepoName: 'cpe:/a:redhat:rhel_eus:8.4::appstream',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {CVSSv3: {Vectors: '', Score: ''}},
        },
      },
      {
        Severity: 'High',
        NamespaceName: 'RHEL8-rhel-8.4-eus',
        Link: 'https://access.redhat.com/errata/RHSA-2022:1676 https://access.redhat.com/security/cve/CVE-2022-1271',
        FixedBy: '0:1.9-13.el8_4',
        Description:
          'The gzip packages contain the gzip (GNU zip) data compression utility. gzip is used to compress regular files. It replaces them with files containing the .gz extension, while retaining ownership modes, access, and modification times.\n\nSecurity Fix(es):\n\n* gzip: arbitrary-file-write vulnerability (CVE-2022-1271)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.',
        Name: 'RHSA-2022:1676: gzip security update (Important)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8.4-eus',
          RepoName: 'cpe:/o:redhat:rhel_eus:8.4::baseos',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {CVSSv3: {Vectors: '', Score: ''}},
        },
      },
    ],
  },
  {
    Name: 'urllib3',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:57fce60a81bf84e6b61ce2b64643c9e4c61da77869b95e0641360b42429c0cff',
    Version: '1.24.2',
    Vulnerabilities: [
      {
        Severity: 'High',
        NamespaceName: 'pyupio',
        Link: '',
        FixedBy: '',
        Description:
          'urllib3 before 1.25.9 allows CRLF injection if the attacker controls the HTTP request method, as demonstrated by inserting CR and LF control characters in the first argument of putrequest(). See: CVE-2020-26137. NOTE: this is similar to CVE-2020-26116.',
        Name: 'pyup.io-38834 (CVE-2020-26137)',
        Metadata: {
          UpdatedBy: 'pyupio',
          RepoName: 'pypi',
          RepoLink: 'https://pypi.org/simple',
          DistroName: '',
          DistroVersion: '',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:L/I:L/A:N',
              Score: 7.2,
            },
          },
        },
      },
      {
        Severity: 'High',
        NamespaceName: 'pyupio',
        Link: '',
        FixedBy: '',
        Description:
          'urllib3 before 1.25.9 allows CRLF injection if the attacker controls the HTTP request method, as demonstrated by inserting CR and LF control characters in the first argument of putrequest(). NOTE: this is similar to CVE-2020-26116.',
        Name: 'pyup.io-38834 (CVE-2020-26137)',
        Metadata: {
          UpdatedBy: 'pyupio',
          RepoName: 'pypi',
          RepoLink: 'https://pypi.org/simple',
          DistroName: '',
          DistroVersion: '',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:L/I:L/A:N',
              Score: 7.2,
            },
          },
        },
      },
      {
        Severity: 'High',
        NamespaceName: 'pyupio',
        Link: '',
        FixedBy: '',
        Description:
          'Urllib3 1.25.9 includes a fix for CVE-2020-26137: Urllib3 before 1.25.9 allows CRLF injection if the attacker controls the HTTP request method, as demonstrated by inserting CR and LF control characters in the first argument of putrequest(). NOTE: this is similar to CVE-2020-26116.\r\nhttps://bugs.python.org/issue39603\r\nhttps://github.com/urllib3/urllib3/commit/1dd69c5c5982fae7c87a620d487c2ebf7a6b436b\r\nhttps://github.com/urllib3/urllib3/pull/1800',
        Name: 'pyup.io-38834 (CVE-2020-26137)',
        Metadata: {
          UpdatedBy: 'pyupio',
          RepoName: 'pypi',
          RepoLink: 'https://pypi.org/simple',
          DistroName: '',
          DistroVersion: '',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:L/I:L/A:N',
              Score: 7.2,
            },
          },
        },
      },
      {
        Severity: 'High',
        NamespaceName: 'pyupio',
        Link: '',
        FixedBy: '',
        Description:
          'Urllib3 1.26.5 includes a fix for CVE-2021-33503: An issue was discovered in urllib3 before 1.26.5. When provided with a URL containing many @ characters in the authority component, the authority regular expression exhibits catastrophic backtracking, causing a denial of service if a URL were passed as a parameter or redirected to via an HTTP redirect.\r\nhttps://github.com/advisories/GHSA-q2q7-5pp4-w6pg',
        Name: 'pyup.io-43975 (CVE-2021-33503)',
        Metadata: {
          UpdatedBy: 'pyupio',
          RepoName: 'pypi',
          RepoLink: 'https://pypi.org/simple',
          DistroName: '',
          DistroVersion: '',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H',
              Score: 7.5,
            },
          },
        },
      },
    ],
  },
  {
    Name: 'rsync',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:f606edb6a32a7c5bce00ab71be5f987ba16eb6bc68bd6c5cefe48bc8199552ca',
    Version: '3.1.3-12.el8',
    Vulnerabilities: [
      {
        Severity: 'High',
        NamespaceName: 'RHEL8-rhel-8.4-eus',
        Link: 'https://access.redhat.com/errata/RHSA-2022:2198 https://access.redhat.com/security/cve/CVE-2018-25032',
        FixedBy: '0:3.1.3-12.el8_4.1',
        Description:
          'The rsync utility enables the users to copy and synchronize files locally or across a network. Synchronization with rsync is fast because rsync only sends the differences in files over the network instead of sending whole files. The rsync utility is also used as a mirroring tool.\n\nSecurity Fix(es):\n\n* zlib: A flaw found in zlib when compressing (not decompressing) certain inputs (CVE-2018-25032)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.',
        Name: 'RHSA-2022:2198: rsync security update (Important)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8.4-eus',
          RepoName: 'cpe:/a:redhat:rhel_eus:8.4::appstream',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H',
              Score: 7.5,
            },
          },
        },
      },
      {
        Severity: 'High',
        NamespaceName: 'RHEL8-rhel-8.4-eus',
        Link: 'https://access.redhat.com/errata/RHSA-2022:2198 https://access.redhat.com/security/cve/CVE-2018-25032',
        FixedBy: '0:3.1.3-12.el8_4.1',
        Description:
          'The rsync utility enables the users to copy and synchronize files locally or across a network. Synchronization with rsync is fast because rsync only sends the differences in files over the network instead of sending whole files. The rsync utility is also used as a mirroring tool.\n\nSecurity Fix(es):\n\n* zlib: A flaw found in zlib when compressing (not decompressing) certain inputs (CVE-2018-25032)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.',
        Name: 'RHSA-2022:2198: rsync security update (Important)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8.4-eus',
          RepoName: 'cpe:/o:redhat:rhel_eus:8.4::baseos',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H',
              Score: 7.5,
            },
          },
        },
      },
    ],
  },
  {
    Name: 'zlib',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:57fce60a81bf84e6b61ce2b64643c9e4c61da77869b95e0641360b42429c0cff',
    Version: '1.2.11-17.el8',
    Vulnerabilities: [
      {
        Severity: 'High',
        NamespaceName: 'RHEL8-rhel-8.4-eus',
        Link: 'https://access.redhat.com/errata/RHSA-2022:4845 https://access.redhat.com/security/cve/CVE-2018-25032',
        FixedBy: '0:1.2.11-18.el8_4',
        Description:
          'The zlib packages provide a general-purpose lossless data compression library that is used by many different programs.\n\nSecurity Fix(es):\n\n* zlib: A flaw found in zlib when compressing (not decompressing) certain inputs (CVE-2018-25032)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.',
        Name: 'RHSA-2022:4845: zlib security update (Important)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8.4-eus',
          RepoName: 'cpe:/a:redhat:rhel_eus:8.4::appstream',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H',
              Score: 7.5,
            },
          },
        },
      },
      {
        Severity: 'High',
        NamespaceName: 'RHEL8-rhel-8.4-eus',
        Link: 'https://access.redhat.com/errata/RHSA-2022:4845 https://access.redhat.com/security/cve/CVE-2018-25032',
        FixedBy: '0:1.2.11-18.el8_4',
        Description:
          'The zlib packages provide a general-purpose lossless data compression library that is used by many different programs.\n\nSecurity Fix(es):\n\n* zlib: A flaw found in zlib when compressing (not decompressing) certain inputs (CVE-2018-25032)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.',
        Name: 'RHSA-2022:4845: zlib security update (Important)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8.4-eus',
          RepoName: 'cpe:/o:redhat:rhel_eus:8.4::baseos',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H',
              Score: 7.5,
            },
          },
        },
      },
    ],
  },
  {
    Name: 'pip',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:f606edb6a32a7c5bce00ab71be5f987ba16eb6bc68bd6c5cefe48bc8199552ca',
    Version: '9.0.3',
    Vulnerabilities: [
      {
        Severity: 'High',
        NamespaceName: 'pyupio',
        Link: '',
        FixedBy: '',
        Description:
          'The pip package before 19.2 for Python allows Directory Traversal when a URL is given in an install command, because a Content-Disposition header can have ../ in a filename, as demonstrated by overwriting the /root/.ssh/authorized_keys file. This occurs in _download_http_url in _internal/download.py.',
        Name: 'pyup.io-38765 (CVE-2019-20916)',
        Metadata: {
          UpdatedBy: 'pyupio',
          RepoName: 'pypi',
          RepoLink: 'https://pypi.org/simple',
          DistroName: '',
          DistroVersion: '',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:N',
              Score: 7.5,
            },
          },
        },
      },
      {
        Severity: 'High',
        NamespaceName: 'pyupio',
        Link: '',
        FixedBy: '',
        Description:
          'Pip before 19.2 for Python allows Directory Traversal when a URL is given in an install command, because a Content-Disposition header can have ../ in a filename, as demonstrated by overwriting the /root/.ssh/authorized_keys file. This occurs in _download_http_url in _internal/download.py.',
        Name: 'pyup.io-38765 (CVE-2019-20916)',
        Metadata: {
          UpdatedBy: 'pyupio',
          RepoName: 'pypi',
          RepoLink: 'https://pypi.org/simple',
          DistroName: '',
          DistroVersion: '',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:N',
              Score: 7.5,
            },
          },
        },
      },
    ],
  },
];

const mediumSeverityFeatures = [
  {
    Name: 'expat',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:9a8fb512735a1ed60cd080c4e4907c295a1f2027a07c16f01da093fdc1c22c85',
    Version: '2.2.5-4.el8_4.2',
    Vulnerabilities: [
      {
        Severity: 'Medium',
        NamespaceName: 'RHEL8-rhel-8.4-eus',
        Link: 'https://access.redhat.com/errata/RHSA-2022:4834 https://access.redhat.com/security/cve/CVE-2022-23852',
        FixedBy: '0:2.2.5-4.el8_4.3',
        Description:
          'Expat is a C library for parsing XML documents.\n\nSecurity Fix(es):\n\n* expat: Integer overflow in function XML_GetBuffer (CVE-2022-23852)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.',
        Name: 'RHSA-2022:4834: expat security update (Moderate)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8.4-eus',
          RepoName: 'cpe:/a:redhat:rhel_eus:8.4::appstream',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
              Score: 9.8,
            },
          },
        },
      },
      {
        Severity: 'Medium',
        NamespaceName: 'RHEL8-rhel-8.4-eus',
        Link: 'https://access.redhat.com/errata/RHSA-2022:4834 https://access.redhat.com/security/cve/CVE-2022-23852',
        FixedBy: '0:2.2.5-4.el8_4.3',
        Description:
          'Expat is a C library for parsing XML documents.\n\nSecurity Fix(es):\n\n* expat: Integer overflow in function XML_GetBuffer (CVE-2022-23852)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.',
        Name: 'RHSA-2022:4834: expat security update (Moderate)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8.4-eus',
          RepoName: 'cpe:/o:redhat:rhel_eus:8.4::baseos',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
              Score: 9.8,
            },
          },
        },
      },
    ],
  },
  {
    Name: 'libtiff',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:b71f31ebaac9f435ee0f837b5c63b1c2a02eadd0ce52a4736d2ae927bb59835b',
    Version: '4.0.9-20.el8',
    Vulnerabilities: [
      {
        Severity: 'Medium',
        NamespaceName: 'RHEL8-rhel-8-including-unpatched',
        Link: 'https://access.redhat.com/errata/RHSA-2022:1810 https://access.redhat.com/security/cve/CVE-2020-19131',
        FixedBy: '0:4.0.9-21.el8',
        Description:
          'The libtiff packages contain a library of functions for manipulating Tagged Image File Format (TIFF) files.\n\nSecurity Fix(es):\n\n* libtiff: a buffer overflow via the "invertImage()" may lead to DoS (CVE-2020-19131)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.\n\nAdditional Changes:\n\nFor detailed information on changes in this release, see the Red Hat Enterprise Linux 8.6 Release Notes linked from the References section.',
        Name: 'RHSA-2022:1810: libtiff security update (Moderate)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8-including-unpatched',
          RepoName: 'cpe:/o:redhat:enterprise_linux:8::baseos',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H',
              Score: 7.5,
            },
          },
        },
      },
    ],
  },
  {
    Name: 'glibc',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:8dfe9326f733b815c486432e93e0a97f03e90e7cc35def9511cd1efa7f917f56',
    Version: '2.28-164.el8',
    Vulnerabilities: [
      {
        Severity: 'Medium',
        NamespaceName: 'RHEL8-rhel-8',
        Link: 'https://access.redhat.com/errata/RHSA-2022:0896 https://access.redhat.com/security/cve/CVE-2021-3999 https://access.redhat.com/security/cve/CVE-2022-23218 https://access.redhat.com/security/cve/CVE-2022-23219',
        FixedBy: '0:2.28-164.el8_5.3',
        Description:
          'The glibc packages provide the standard C libraries (libc), POSIX thread libraries (libpthread), standard math libraries (libm), and the name service cache daemon (nscd) used by multiple programs on the system. Without these libraries, the Linux system cannot function correctly.\n\nSecurity Fix(es):\n\n* glibc: Off-by-one buffer overflow/underflow in getcwd() (CVE-2021-3999)\n\n* glibc: Stack-based buffer overflow in svcunix_create via long pathnames (CVE-2022-23218)\n\n* glibc: Stack-based buffer overflow in sunrpc clnt_create via a long pathname (CVE-2022-23219)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.',
        Name: 'RHSA-2022:0896: glibc security update (Moderate)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8',
          RepoName: 'cpe:/o:redhat:enterprise_linux:8::baseos',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
              Score: 9.8,
            },
          },
        },
      },
    ],
  },
  {
    Name: 'cryptography',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:6c5d27ae7a2aa08ebc449d61ed339dfcb3324450ceaded23eec1fbc8d3f10499',
    Version: '3.3.2',
    Vulnerabilities: [
      {
        Severity: 'Medium',
        NamespaceName: 'pyupio',
        Link: '',
        FixedBy: '',
        Description:
          'Cryptography 39.0.0 drops support for C library "LibreSSL" < 3.4, as these versions are not receiving security support anymore.',
        Name: 'pyup.io-51159 (CVE-2021-41581)',
        Metadata: {
          UpdatedBy: 'pyupio',
          RepoName: 'pypi',
          RepoLink: 'https://pypi.org/simple',
          DistroName: '',
          DistroVersion: '',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H',
              Score: 5.5,
            },
          },
        },
      },
    ],
  },
  {
    Name: 'platform-python',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:8dfe9326f733b815c486432e93e0a97f03e90e7cc35def9511cd1efa7f917f56',
    Version: '3.6.8-41.el8',
    Vulnerabilities: [
      {
        Severity: 'Medium',
        NamespaceName: 'RHEL8-rhel-8-including-unpatched',
        Link: 'https://access.redhat.com/errata/RHSA-2022:1986 https://access.redhat.com/security/cve/CVE-2021-3737 https://access.redhat.com/security/cve/CVE-2021-4189',
        FixedBy: '0:3.6.8-45.el8',
        Description:
          'Python is an interpreted, interactive, object-oriented programming language, which includes modules, classes, exceptions, very high level dynamic data types and dynamic typing. Python supports interfaces to many system calls and libraries, as well as to various windowing systems. \n\nSecurity Fix(es):\n\n* python: ftplib should not use the host from the PASV response (CVE-2021-4189)\n\n* python: urllib: HTTP client possible infinite loop on a 100 Continue response (CVE-2021-3737)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.\n\nAdditional Changes:\n\nFor detailed information on changes in this release, see the Red Hat Enterprise Linux 8.6 Release Notes linked from the References section.',
        Name: 'RHSA-2022:1986: python3 security update (Moderate)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8-including-unpatched',
          RepoName: 'cpe:/o:redhat:enterprise_linux:8::baseos',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H',
              Score: 7.5,
            },
          },
        },
      },
      {
        Severity: 'Medium',
        NamespaceName: 'RHEL8-rhel-8-including-unpatched',
        Link: 'https://access.redhat.com/errata/RHSA-2022:6457 https://access.redhat.com/security/cve/CVE-2015-20107 https://access.redhat.com/security/cve/CVE-2022-0391',
        FixedBy: '0:3.6.8-47.el8_6',
        Description:
          'Python is an interpreted, interactive, object-oriented programming language, which includes modules, classes, exceptions, very high level dynamic data types and dynamic typing. Python supports interfaces to many system calls and libraries, as well as to various windowing systems. \n\nSecurity Fix(es):\n\n* python(mailcap): findmatch() function does not sanitise the second argument (CVE-2015-20107)\n\n* python: urllib.parse does not sanitize URLs containing ASCII newline and tabs (CVE-2022-0391)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.',
        Name: 'RHSA-2022:6457: python3 security update (Moderate)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8-including-unpatched',
          RepoName: 'cpe:/o:redhat:enterprise_linux:8::baseos',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
              Score: 9.8,
            },
          },
        },
      },
    ],
  },
  {
    Name: 'pypdf2',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:6c5d27ae7a2aa08ebc449d61ed339dfcb3324450ceaded23eec1fbc8d3f10499',
    Version: '1.26.0',
    Vulnerabilities: [
      {
        Severity: 'Medium',
        NamespaceName: 'pyupio',
        Link: '',
        FixedBy: '',
        Description:
          "PyPDF2 1.27.5 includes a fix for CVE-2022-24859: In versions prior to 1.27.5 an attacker can craft a PDF which leads to an infinite loop if PyPDF2 code attempts to get the content stream. The reason is that the last while-loop in 'ContentStream._readInlineImage' only terminates when it finds the 'EI' token, but never actually checks if the stream has already ended. Users unable to upgrade should validate PDFs prior to iterating over their content stream.\r\nhttps://github.com/py-pdf/PyPDF2/security/advisories/GHSA-xcjx-m2pj-8g79",
        Name: 'pyup.io-48186 (CVE-2022-24859)',
        Metadata: {
          UpdatedBy: 'pyupio',
          RepoName: 'pypi',
          RepoLink: 'https://pypi.org/simple',
          DistroName: '',
          DistroVersion: '',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H',
              Score: 5.5,
            },
          },
        },
      },
    ],
  },
  {
    Name: 'python-keystoneclient',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:6c5d27ae7a2aa08ebc449d61ed339dfcb3324450ceaded23eec1fbc8d3f10499',
    Version: '3.22.0',
    Vulnerabilities: [
      {
        Severity: 'Medium',
        NamespaceName: 'pyupio',
        Link: '',
        FixedBy: '',
        Description:
          'A flaw was found in Keystone. There is a time lag (up to one hour in a default configuration) between when security policy says a token should be revoked from when it is actually revoked. This could allow a remote administrator to secretly maintain access for longer than expected.',
        Name: 'pyup.io-50880 (CVE-2022-2447)',
        Metadata: {
          UpdatedBy: 'pyupio',
          RepoName: 'pypi',
          RepoLink: 'https://pypi.org/simple',
          DistroName: '',
          DistroVersion: '',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:H',
              Score: 6.6,
            },
          },
        },
      },
    ],
  },
  {
    Name: 'pcre2',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:8dfe9326f733b815c486432e93e0a97f03e90e7cc35def9511cd1efa7f917f56',
    Version: '10.32-2.el8',
    Vulnerabilities: [
      {
        Severity: 'Medium',
        NamespaceName: 'RHEL8-rhel-8',
        Link: 'https://access.redhat.com/errata/RHSA-2022:5809 https://access.redhat.com/security/cve/CVE-2022-1586',
        FixedBy: '0:10.32-3.el8_6',
        Description:
          'The pcre2 package contains a new generation of the Perl Compatible Regular Expression libraries for implementing regular expression pattern matching using the same syntax and semantics as Perl. \n\nSecurity Fix(es):\n\n* pcre2: Out-of-bounds read in compile_xclass_matchingpath in pcre2_jit_compile.c (CVE-2022-1586)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.',
        Name: 'RHSA-2022:5809: pcre2 security update (Moderate)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8',
          RepoName: 'cpe:/o:redhat:enterprise_linux:8::baseos',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:H',
              Score: 9.1,
            },
          },
        },
      },
    ],
  },
  {
    Name: 'python3-libs',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:8dfe9326f733b815c486432e93e0a97f03e90e7cc35def9511cd1efa7f917f56',
    Version: '3.6.8-41.el8',
    Vulnerabilities: [
      {
        Severity: 'Medium',
        NamespaceName: 'RHEL8-rhel-8-including-unpatched',
        Link: 'https://access.redhat.com/errata/RHSA-2022:1986 https://access.redhat.com/security/cve/CVE-2021-3737 https://access.redhat.com/security/cve/CVE-2021-4189',
        FixedBy: '0:3.6.8-45.el8',
        Description:
          'Python is an interpreted, interactive, object-oriented programming language, which includes modules, classes, exceptions, very high level dynamic data types and dynamic typing. Python supports interfaces to many system calls and libraries, as well as to various windowing systems. \n\nSecurity Fix(es):\n\n* python: ftplib should not use the host from the PASV response (CVE-2021-4189)\n\n* python: urllib: HTTP client possible infinite loop on a 100 Continue response (CVE-2021-3737)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.\n\nAdditional Changes:\n\nFor detailed information on changes in this release, see the Red Hat Enterprise Linux 8.6 Release Notes linked from the References section.',
        Name: 'RHSA-2022:1986: python3 security update (Moderate)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8-including-unpatched',
          RepoName: 'cpe:/o:redhat:enterprise_linux:8::baseos',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H',
              Score: 7.5,
            },
          },
        },
      },
      {
        Severity: 'Medium',
        NamespaceName: 'RHEL8-rhel-8-including-unpatched',
        Link: 'https://access.redhat.com/errata/RHSA-2022:6457 https://access.redhat.com/security/cve/CVE-2015-20107 https://access.redhat.com/security/cve/CVE-2022-0391',
        FixedBy: '0:3.6.8-47.el8_6',
        Description:
          'Python is an interpreted, interactive, object-oriented programming language, which includes modules, classes, exceptions, very high level dynamic data types and dynamic typing. Python supports interfaces to many system calls and libraries, as well as to various windowing systems. \n\nSecurity Fix(es):\n\n* python(mailcap): findmatch() function does not sanitise the second argument (CVE-2015-20107)\n\n* python: urllib.parse does not sanitize URLs containing ASCII newline and tabs (CVE-2022-0391)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.',
        Name: 'RHSA-2022:6457: python3 security update (Moderate)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8-including-unpatched',
          RepoName: 'cpe:/o:redhat:enterprise_linux:8::baseos',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
              Score: 9.8,
            },
          },
        },
      },
    ],
  },
  {
    Name: 'python38-pip',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:b71f31ebaac9f435ee0f837b5c63b1c2a02eadd0ce52a4736d2ae927bb59835b',
    Version: '19.3.1-4.module+el8.5.0+12205+a865257a',
    Vulnerabilities: [
      {
        Severity: 'Medium',
        NamespaceName: 'RHEL8-rhel-8-including-unpatched',
        Link: 'https://access.redhat.com/errata/RHSA-2022:1764 https://access.redhat.com/security/cve/CVE-2021-3733 https://access.redhat.com/security/cve/CVE-2021-3737 https://access.redhat.com/security/cve/CVE-2021-43818 https://access.redhat.com/security/cve/CVE-2022-0391',
        FixedBy: '0:19.3.1-5.module+el8.6.0+13002+70cfc74a',
        Description:
          'Python is an interpreted, interactive, object-oriented programming language, which includes modules, classes, exceptions, very high level dynamic data types and dynamic typing. Python supports interfaces to many system calls and libraries, as well as to various windowing systems. \n\nThe following packages have been upgraded to a later upstream version: python38 (3.8), python38-devel (3.8). (BZ#1997680, BZ#1997860)\n\nSecurity Fix(es):\n\n* python: urllib: Regular expression DoS in AbstractBasicAuthHandler (CVE-2021-3733)\n\n* python-lxml: HTML Cleaner allows crafted and SVG embedded scripts to pass through (CVE-2021-43818)\n\n* python: urllib.parse does not sanitize URLs containing ASCII newline and tabs (CVE-2022-0391)\n\n* python: urllib: HTTP client possible infinite loop on a 100 Continue response (CVE-2021-3737)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.\n\nAdditional Changes:\n\nFor detailed information on changes in this release, see the Red Hat Enterprise Linux 8.6 Release Notes linked from the References section.',
        Name: 'RHSA-2022:1764: python38:3.8 and python38-devel:3.8 security update (Moderate)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8-including-unpatched',
          RepoName: 'cpe:/o:redhat:enterprise_linux:8::baseos',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:N',
              Score: 7.5,
            },
          },
        },
      },
    ],
  },
  {
    Name: 'libgcrypt',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:8dfe9326f733b815c486432e93e0a97f03e90e7cc35def9511cd1efa7f917f56',
    Version: '1.8.5-6.el8',
    Vulnerabilities: [
      {
        Severity: 'Medium',
        NamespaceName: 'RHEL8-rhel-8-including-unpatched',
        Link: 'https://access.redhat.com/errata/RHSA-2022:5311 https://access.redhat.com/security/cve/CVE-2021-40528',
        FixedBy: '0:1.8.5-7.el8_6',
        Description:
          'The libgcrypt library provides general-purpose implementations of various cryptographic algorithms.\n\nSecurity Fix(es):\n\n* libgcrypt: ElGamal implementation allows plaintext recovery (CVE-2021-40528)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.',
        Name: 'RHSA-2022:5311: libgcrypt security update (Moderate)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8-including-unpatched',
          RepoName: 'cpe:/o:redhat:enterprise_linux:8::baseos',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:N',
              Score: 5.9,
            },
          },
        },
      },
    ],
  },
  {
    Name: 'python38-pip-wheel',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:b71f31ebaac9f435ee0f837b5c63b1c2a02eadd0ce52a4736d2ae927bb59835b',
    Version: '19.3.1-4.module+el8.5.0+12205+a865257a',
    Vulnerabilities: [
      {
        Severity: 'Medium',
        NamespaceName: 'RHEL8-rhel-8-including-unpatched',
        Link: 'https://access.redhat.com/errata/RHSA-2022:1764 https://access.redhat.com/security/cve/CVE-2021-3733 https://access.redhat.com/security/cve/CVE-2021-3737 https://access.redhat.com/security/cve/CVE-2021-43818 https://access.redhat.com/security/cve/CVE-2022-0391',
        FixedBy: '0:19.3.1-5.module+el8.6.0+13002+70cfc74a',
        Description:
          'Python is an interpreted, interactive, object-oriented programming language, which includes modules, classes, exceptions, very high level dynamic data types and dynamic typing. Python supports interfaces to many system calls and libraries, as well as to various windowing systems. \n\nThe following packages have been upgraded to a later upstream version: python38 (3.8), python38-devel (3.8). (BZ#1997680, BZ#1997860)\n\nSecurity Fix(es):\n\n* python: urllib: Regular expression DoS in AbstractBasicAuthHandler (CVE-2021-3733)\n\n* python-lxml: HTML Cleaner allows crafted and SVG embedded scripts to pass through (CVE-2021-43818)\n\n* python: urllib.parse does not sanitize URLs containing ASCII newline and tabs (CVE-2022-0391)\n\n* python: urllib: HTTP client possible infinite loop on a 100 Continue response (CVE-2021-3737)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.\n\nAdditional Changes:\n\nFor detailed information on changes in this release, see the Red Hat Enterprise Linux 8.6 Release Notes linked from the References section.',
        Name: 'RHSA-2022:1764: python38:3.8 and python38-devel:3.8 security update (Moderate)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8-including-unpatched',
          RepoName: 'cpe:/o:redhat:enterprise_linux:8::baseos',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:N',
              Score: 7.5,
            },
          },
        },
      },
    ],
  },
  {
    Name: 'glibc-minimal-langpack',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:8dfe9326f733b815c486432e93e0a97f03e90e7cc35def9511cd1efa7f917f56',
    Version: '2.28-164.el8',
    Vulnerabilities: [
      {
        Severity: 'Medium',
        NamespaceName: 'RHEL8-rhel-8',
        Link: 'https://access.redhat.com/errata/RHSA-2022:0896 https://access.redhat.com/security/cve/CVE-2021-3999 https://access.redhat.com/security/cve/CVE-2022-23218 https://access.redhat.com/security/cve/CVE-2022-23219',
        FixedBy: '0:2.28-164.el8_5.3',
        Description:
          'The glibc packages provide the standard C libraries (libc), POSIX thread libraries (libpthread), standard math libraries (libm), and the name service cache daemon (nscd) used by multiple programs on the system. Without these libraries, the Linux system cannot function correctly.\n\nSecurity Fix(es):\n\n* glibc: Off-by-one buffer overflow/underflow in getcwd() (CVE-2021-3999)\n\n* glibc: Stack-based buffer overflow in svcunix_create via long pathnames (CVE-2022-23218)\n\n* glibc: Stack-based buffer overflow in sunrpc clnt_create via a long pathname (CVE-2022-23219)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.',
        Name: 'RHSA-2022:0896: glibc security update (Moderate)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8',
          RepoName: 'cpe:/o:redhat:enterprise_linux:8::baseos',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
              Score: 9.8,
            },
          },
        },
      },
    ],
  },
  {
    Name: 'glibc-common',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:8dfe9326f733b815c486432e93e0a97f03e90e7cc35def9511cd1efa7f917f56',
    Version: '2.28-164.el8',
    Vulnerabilities: [
      {
        Severity: 'Medium',
        NamespaceName: 'RHEL8-rhel-8',
        Link: 'https://access.redhat.com/errata/RHSA-2022:0896 https://access.redhat.com/security/cve/CVE-2021-3999 https://access.redhat.com/security/cve/CVE-2022-23218 https://access.redhat.com/security/cve/CVE-2022-23219',
        FixedBy: '0:2.28-164.el8_5.3',
        Description:
          'The glibc packages provide the standard C libraries (libc), POSIX thread libraries (libpthread), standard math libraries (libm), and the name service cache daemon (nscd) used by multiple programs on the system. Without these libraries, the Linux system cannot function correctly.\n\nSecurity Fix(es):\n\n* glibc: Off-by-one buffer overflow/underflow in getcwd() (CVE-2021-3999)\n\n* glibc: Stack-based buffer overflow in svcunix_create via long pathnames (CVE-2022-23218)\n\n* glibc: Stack-based buffer overflow in sunrpc clnt_create via a long pathname (CVE-2022-23219)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.',
        Name: 'RHSA-2022:0896: glibc security update (Moderate)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8',
          RepoName: 'cpe:/o:redhat:enterprise_linux:8::baseos',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
              Score: 9.8,
            },
          },
        },
      },
    ],
  },
  {
    Name: 'curl',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:8dfe9326f733b815c486432e93e0a97f03e90e7cc35def9511cd1efa7f917f56',
    Version: '7.61.1-22.el8',
    Vulnerabilities: [
      {
        Severity: 'Medium',
        NamespaceName: 'RHEL8-rhel-8-including-unpatched',
        Link: 'https://access.redhat.com/errata/RHSA-2022:5313 https://access.redhat.com/security/cve/CVE-2022-22576 https://access.redhat.com/security/cve/CVE-2022-27774 https://access.redhat.com/security/cve/CVE-2022-27776 https://access.redhat.com/security/cve/CVE-2022-27782',
        FixedBy: '0:7.61.1-22.el8_6.3',
        Description:
          'The curl packages provide the libcurl library and the curl utility for downloading files from servers using various protocols, including HTTP, FTP, and LDAP.\n\nSecurity Fix(es):\n\n* curl: OAUTH2 bearer bypass in connection re-use (CVE-2022-22576)\n\n* curl: credential leak on redirect (CVE-2022-27774)\n\n* curl: auth/cookie leak on redirect (CVE-2022-27776)\n\n* curl: TLS and SSH connection too eager reuse (CVE-2022-27782)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.',
        Name: 'RHSA-2022:5313: curl security update (Moderate)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8-including-unpatched',
          RepoName: 'cpe:/o:redhat:enterprise_linux:8::baseos',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N',
              Score: 8.1,
            },
          },
        },
      },
      {
        Severity: 'Medium',
        NamespaceName: 'RHEL8-rhel-8-including-unpatched',
        Link: 'https://access.redhat.com/errata/RHSA-2022:6159 https://access.redhat.com/security/cve/CVE-2022-32206 https://access.redhat.com/security/cve/CVE-2022-32208',
        FixedBy: '0:7.61.1-22.el8_6.4',
        Description:
          'The curl packages provide the libcurl library and the curl utility for downloading files from servers using various protocols, including HTTP, FTP, and LDAP.\n\nSecurity Fix(es):\n\n* curl: HTTP compression denial of service (CVE-2022-32206)\n\n* curl: FTP-KRB bad message verification (CVE-2022-32208)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.',
        Name: 'RHSA-2022:6159: curl security update (Moderate)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8-including-unpatched',
          RepoName: 'cpe:/o:redhat:enterprise_linux:8::baseos',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H',
              Score: 6.5,
            },
          },
        },
      },
    ],
  },
  {
    Name: 'libcurl',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:8dfe9326f733b815c486432e93e0a97f03e90e7cc35def9511cd1efa7f917f56',
    Version: '7.61.1-22.el8',
    Vulnerabilities: [
      {
        Severity: 'Medium',
        NamespaceName: 'RHEL8-rhel-8-including-unpatched',
        Link: 'https://access.redhat.com/errata/RHSA-2022:5313 https://access.redhat.com/security/cve/CVE-2022-22576 https://access.redhat.com/security/cve/CVE-2022-27774 https://access.redhat.com/security/cve/CVE-2022-27776 https://access.redhat.com/security/cve/CVE-2022-27782',
        FixedBy: '0:7.61.1-22.el8_6.3',
        Description:
          'The curl packages provide the libcurl library and the curl utility for downloading files from servers using various protocols, including HTTP, FTP, and LDAP.\n\nSecurity Fix(es):\n\n* curl: OAUTH2 bearer bypass in connection re-use (CVE-2022-22576)\n\n* curl: credential leak on redirect (CVE-2022-27774)\n\n* curl: auth/cookie leak on redirect (CVE-2022-27776)\n\n* curl: TLS and SSH connection too eager reuse (CVE-2022-27782)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.',
        Name: 'RHSA-2022:5313: curl security update (Moderate)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8-including-unpatched',
          RepoName: 'cpe:/o:redhat:enterprise_linux:8::baseos',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N',
              Score: 8.1,
            },
          },
        },
      },
      {
        Severity: 'Medium',
        NamespaceName: 'RHEL8-rhel-8-including-unpatched',
        Link: 'https://access.redhat.com/errata/RHSA-2022:6159 https://access.redhat.com/security/cve/CVE-2022-32206 https://access.redhat.com/security/cve/CVE-2022-32208',
        FixedBy: '0:7.61.1-22.el8_6.4',
        Description:
          'The curl packages provide the libcurl library and the curl utility for downloading files from servers using various protocols, including HTTP, FTP, and LDAP.\n\nSecurity Fix(es):\n\n* curl: HTTP compression denial of service (CVE-2022-32206)\n\n* curl: FTP-KRB bad message verification (CVE-2022-32208)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.',
        Name: 'RHSA-2022:6159: curl security update (Moderate)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8-including-unpatched',
          RepoName: 'cpe:/o:redhat:enterprise_linux:8::baseos',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H',
              Score: 6.5,
            },
          },
        },
      },
    ],
  },
  {
    Name: 'gnupg2',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:8dfe9326f733b815c486432e93e0a97f03e90e7cc35def9511cd1efa7f917f56',
    Version: '2.2.20-2.el8',
    Vulnerabilities: [
      {
        Severity: 'Medium',
        NamespaceName: 'RHEL8-rhel-8-including-unpatched',
        Link: 'https://access.redhat.com/errata/RHSA-2022:6463 https://access.redhat.com/security/cve/CVE-2022-34903',
        FixedBy: '0:2.2.20-3.el8_6',
        Description:
          'The GNU Privacy Guard (GnuPG or GPG) is a tool for encrypting data and creating digital signatures, compliant with OpenPGP and S/MIME standards.\n\nSecurity Fix(es):\n\n* gpg: Signature spoofing via status line injection (CVE-2022-34903)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.',
        Name: 'RHSA-2022:6463: gnupg2 security update (Moderate)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8-including-unpatched',
          RepoName: 'cpe:/o:redhat:enterprise_linux:8::baseos',
          RepoLin: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:L/A:N',
              Score: 6.5,
            },
          },
        },
      },
    ],
  },
];

const lowSeverityFeatures = [
  {
    Name: 'libssh',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:8dfe9326f733b815c486432e93e0a97f03e90e7cc35def9511cd1efa7f917f56',
    Version: '0.9.4-3.el8',
    Vulnerabilities: [
      {
        Severity: 'Low',
        NamespaceName: 'RHEL8-rhel-8-including-unpatched',
        Link: 'https://access.redhat.com/errata/RHSA-2022:2031 https://access.redhat.com/security/cve/CVE-2021-3634',
        FixedBy: '0:0.9.6-3.el8',
        Description:
          'libssh is a library which implements the SSH protocol. It can be used to implement client and server applications.\n\nThe following packages have been upgraded to a later upstream version: libssh (0.9.6). (BZ#1896651)\n\nSecurity Fix(es):\n\n* libssh: possible heap-based buffer overflow when rekeying (CVE-2021-3634)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.\n\nAdditional Changes:\n\nFor detailed information on changes in this release, see the Red Hat Enterprise Linux 8.6 Release Notes linked from the References section.',
        Name: 'RHSA-2022:2031: libssh security, bug fix, and enhancement update (Low)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8-including-unpatched',
          RepoName: 'cpe:/o:redhat:enterprise_linux:8::baseos',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:H',
              Score: 6.5,
            },
          },
        },
      },
    ],
  },
  {
    Name: 'libssh-config',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:8dfe9326f733b815c486432e93e0a97f03e90e7cc35def9511cd1efa7f917f56',
    Version: '0.9.4-3.el8',
    Vulnerabilities: [
      {
        Severity: 'Low',
        NamespaceName: 'RHEL8-rhel-8-including-unpatched',
        Link: 'https://access.redhat.com/errata/RHSA-2022:2031 https://access.redhat.com/security/cve/CVE-2021-3634',
        FixedBy: '0:0.9.6-3.el8',
        Description:
          'libssh is a library which implements the SSH protocol. It can be used to implement client and server applications.\n\nThe following packages have been upgraded to a later upstream version: libssh (0.9.6). (BZ#1896651)\n\nSecurity Fix(es):\n\n* libssh: possible heap-based buffer overflow when rekeying (CVE-2021-3634)\n\nFor more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.\n\nAdditional Changes:\n\nFor detailed information on changes in this release, see the Red Hat Enterprise Linux 8.6 Release Notes linked from the References section.',
        Name: 'RHSA-2022:2031: libssh security, bug fix, and enhancement update (Low)',
        Metadata: {
          UpdatedBy: 'RHEL8-rhel-8-including-unpatched',
          RepoName: 'cpe:/o:redhat:enterprise_linux:8::baseos',
          RepoLink: null,
          DistroName: 'Red Hat Enterprise Linux Server',
          DistroVersion: '8',
          NVD: {
            CVSSv3: {
              Vectors: 'CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:H',
              Score: 6.5,
            },
          },
        },
      },
    ],
  },
];

const unknownSeverityFeatures = [
  {
    Name: 'mako',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:6c5d27ae7a2aa08ebc449d61ed339dfcb3324450ceaded23eec1fbc8d3f10499',
    Version: '1.1.1',
    Vulnerabilities: [
      {
        Severity: 'Unknown',
        NamespaceName: 'pyupio',
        Link: '',
        FixedBy: '',
        Description:
          'Mako 1.2.2 includes a fix for a REDoS vulnerability.\r\nhttps://github.com/sqlalchemy/mako/issues/366',
        Name: 'pyup.io-50870 (PVE-2022-50870)',
        Metadata: {
          UpdatedBy: 'pyupio',
          RepoName: 'pypi',
          RepoLink: 'https://pypi.org/simple',
          DistroName: '',
          DistroVersion: '',
          NVD: {
            CVSSv3: {
              Vectors: '',
              Score: '',
            },
          },
        },
      },
    ],
  },
  {
    Name: 'click',
    VersionFormat: '',
    NamespaceName: '',
    AddedBy:
      'sha256:6c5d27ae7a2aa08ebc449d61ed339dfcb3324450ceaded23eec1fbc8d3f10499',
    Version: '7.1.2',
    Vulnerabilities: [
      {
        Severity: 'Unknown',
        NamespaceName: 'pyupio',
        Link: '',
        FixedBy: '',
        Description:
          "Click 8.0.0 uses 'mkstemp()' instead of the deprecated & insecure 'mktemp()'.\r\nhttps://github.com/pallets/click/issues/1752",
        Name: 'pyup.io-47833 (PVE-2022-47833)',
        Metadata: {
          UpdatedBy: 'pyupio',
          RepoName: 'pypi',
          RepoLink: 'https://pypi.org/simple',
          DistroName: '',
          DistroVersion: '',
          NVD: {
            CVSSv3: {
              Vectors: '',
              Score: '',
            },
          },
        },
      },
    ],
  },
];

const mockResponseMixedVulns = {
  status: 'scanned',
  data: {
    Layer: {
      Name: 'sha256:ee4e8b351f1976248ad72cc4420b9e747c4fc9ca4a9443783dba824f50954a91',
      ParentName: '',
      NamespaceName: '',
      IndexedByVersion: 4,
      Features: [
        ...noSeverityFeatures,
        ...criticalSeverityFeatures,
        ...highSeverityFeatures,
        ...mediumSeverityFeatures,
        ...lowSeverityFeatures,
        ...unknownSeverityFeatures,
      ],
    },
  },
};

const mockResponseNoVulns = {
  status: 'scanned',
  data: {
    Layer: {
      Name: 'sha256:ee4e8b351f1976248ad72cc4420b9e747c4fc9ca4a9443783dba824f50954a91',
      ParentName: '',
      NamespaceName: '',
      IndexedByVersion: 4,
      Features: noSeverityFeatures,
    },
  },
};

const mockResponseNoPackages = {
  status: 'scanned',
  data: {
    Layer: {
      Name: 'sha256:ee4e8b351f1976248ad72cc4420b9e747c4fc9ca4a9443783dba824f50954a91',
      ParentName: '',
      NamespaceName: '',
      IndexedByVersion: 4,
      Features: [],
    },
  },
};

const mockResponseHighVulns = {
  status: 'scanned',
  data: {
    Layer: {
      Name: 'sha256:ee4e8b351f1976248ad72cc4420b9e747c4fc9ca4a9443783dba824f50954a91',
      ParentName: '',
      NamespaceName: '',
      IndexedByVersion: 4,
      Features: [...noSeverityFeatures, ...highSeverityFeatures],
    },
  },
};

// TODO: Does queued state still return the Layer field?
const mockResponseQueued = {
  status: 'queued',
  data: {
    Layer: {
      Name: 'sha256:ee4e8b351f1976248ad72cc4420b9e747c4fc9ca4a9443783dba824f50954a91',
      ParentName: '',
      NamespaceName: '',
      IndexedByVersion: 4,
      Features: [],
    },
  },
};

// TODO: Does failed state still return the Layer field?
const mockResponseFailed = {
  status: 'failed',
  data: {
    Layer: {
      Name: 'sha256:ee4e8b351f1976248ad72cc4420b9e747c4fc9ca4a9443783dba824f50954a91',
      ParentName: '',
      NamespaceName: '',
      IndexedByVersion: 4,
      Features: [],
    },
  },
};

// TODO: Does unsupported state still return the Layer field?
const mockResponseUnsupported = {
  status: 'unsupported',
  data: {
    Layer: {
      Name: 'sha256:ee4e8b351f1976248ad72cc4420b9e747c4fc9ca4a9443783dba824f50954a91',
      ParentName: '',
      NamespaceName: '',
      IndexedByVersion: 4,
      Features: [],
    },
  },
};

const securityUrl =
  /api\/v1\/repository\/.+\/.+\/manifest\/sha256:1234567890101112150f0d3de5f80a38f65a85e709b77fd24491253990f306be\/security\?vulnerabilities=true/;
mock.onGet(securityUrl).reply(200, mockResponseHighVulns);

const mixedVulns =
  /api\/v1\/repository\/.+\/.+\/manifest\/sha256:securityreportmixedvulns5f80a38f65a85e709b77fd24491253990f30b6be\/security\?vulnerabilities=true/;
mock.onGet(mixedVulns).reply(200, mockResponseMixedVulns);

const ppc64lesubmanifest =
  /api\/v1\/repository\/.+\/.+\/manifest\/sha256:ppc64lesubmanifest11f826dd35a24e31eadb507111deae66b0cfea7c52a824\/security\?vulnerabilities=true/;
mock.onGet(ppc64lesubmanifest).reply(200, mockResponseNoVulns);

const amd64submanifest =
  /api\/v1\/repository\/.+\/.+\/manifest\/sha256:amd64submanifest11f34826dd35a24e31eadb507111deae66b0cfea7c52a824\/security\?vulnerabilities=true/;
mock.onGet(amd64submanifest).reply(200, mockResponseQueued);

const securityReportFailed =
  /api\/v1\/repository\/.+\/.+\/manifest\/sha256:securityreportfailedd3de5f80a38f65a85e709b77fd24491253990f30b6be\/security\?vulnerabilities=true/;
mock.onGet(securityReportFailed).reply(200, mockResponseFailed);

const securityReportUnsupported =
  /api\/v1\/repository\/.+\/.+\/manifest\/sha256:securityreportunsupported80a38f65a85e709b77dfd24491253990f30b6be\/security\?vulnerabilities=true/;
mock.onGet(securityReportUnsupported).reply(200, mockResponseUnsupported);

const securityReportQueued =
  /api\/v1\/repository\/.+\/.+\/manifest\/sha256:securityreportqueuedd3de5f80a38f65a85e709b77fd24491253990f30b6be\/security\?vulnerabilities=true/;
mock.onGet(securityReportQueued).reply(200, mockResponseQueued);

const securityReportNoVulns =
  /api\/v1\/repository\/.+\/.+\/manifest\/sha256:securityreportnovulns3de5f80a38f65a85e709b77fd24491253990f30b6be\/security\?vulnerabilities=true/;
mock.onGet(securityReportNoVulns).reply(200, mockResponseNoVulns);

const packagesReportNoPackages =
  /api\/v1\/repository\/.+\/.+\/manifest\/sha256:packagesreportnopackages5f80a38f65a85e709b77fd24491253990f30b6be\/security\?vulnerabilities=true/;
mock.onGet(packagesReportNoPackages).reply(200, mockResponseNoPackages);
