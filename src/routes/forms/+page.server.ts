import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const forms = {
		'NISP Policy': [
			{
				title: 'Innovation and Startup Policy',
				href: 'https://iiitdm.ac.in/img/Innovation_Initiatives/IIITDM-NISP-Version-1.2-28Oct2021.pdf'
			},
			{
				title: 'MoE National Innovation & Startup Policy',
				href: 'https://iiitdm.ac.in/img/Innovation_Initiatives/MoE-Innovation_and_startup_policy_2019.pdf'
			},
			{
				title: 'TN Startup Policy',
				href: 'https://iiitdm.ac.in/img/Innovation_Initiatives/STARTUP-TN-Policy.pdf'
			}
		],

		'IPR Policy': [
			{
				title: 'Intellectual Property Rights Policy',
				href: 'https://iiitdm.ac.in/img/Innovation_Initiatives/IIITDM-IPR-Policy-Version-2-20Apr2022.pdf'
			},
			{
				title: 'MoE National Innovation & Startup Policy',
				href: 'https://iiitdm.ac.in/img/Innovation_Initiatives/MoE-Innovation_and_startup_policy_2019.pdf'
			}
		],

		'Innovation Grant and Support': [
			{
				title: 'Advance Budget Request Form',
				href: '/docs/Advance_Request_Form.pdf'
			},
			{
				title: 'Budget Request Form',
				href: '/docs/Budget_Request_form.pdf'
			},
			{
				title: 'Reimbursement Form',
				href: '/docs/Reimbursement_Form.pdf'
			},
			{
				title: 'Advance Settlement Form',
				href: '/docs/SA_Tech_Advance_Settlement_Form.pdf'
			},
			{
				title: 'Asset Transform Form',
				href: '/docs/SA_Tech_03_ASSET_TRANSFER_FORM.pdf'
			},
			{
				title: 'Non Consumable Indent Form',
				href: '/docs/SA_Tech_Non_Consumable_Indent.pdf'
			},
			{
				title: 'Temporary Advance Form',
				href: '/docs/SA_Tech_Temporary_Advance_Form.pdf'
			}
		],

		ARIIA: [
			{
				title: 'Certificate of Appreciation',
				href: 'https://iiitdm.ac.in/img/Innovation_Initiatives/ARI-U-0455-2020-e-certificate.pdf'
			},
			{
				title: 'Certificate of Recognition',
				href: 'https://iiitdm.ac.in/img/Innovation_Initiatives/ARI-U-0455-2021.pdf'
			}
		],

		'Innovative Idea to Reality (I2R) Makerspace': [
			{
				title: 'Makerspace usage Form',
				href: 'https://docs.google.com/document/d/1r8gTKgbhtiYPMCVVTHUTe97uFcEpFMG-e1pJwtALNEI/edit'
			}
		]
	};

	return {
		forms
	};
};
