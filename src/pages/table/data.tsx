export const data = [
    {
        userId: '1', //we'll use this as a unique row id
        firstName: 'Dylan',
        lastName: 'Murray',
        age: 22,
        address: '261 Erdman Ford',
        city: 'East Daphne',
        state: 'Kentucky',
    },
    {
        userId: '2',
        firstName: 'Raquel',
        lastName: 'Kohler',
        age: 18,
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Ohio',
    },
    {
        userId: '3', //we'll use this as a unique row id
        firstName: 'Dylan',
        lastName: 'Murray',
        age: 22,
        address: '261 Erdman Ford',
        city: 'East Daphne',
        state: 'Kentucky',
    },
    {
        userId: '4',
        firstName: 'Raquel',
        lastName: 'Kohler',
        age: 18,
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Ohio',
    },
    {
        userId: '5', //we'll use this as a unique row id
        firstName: 'Dylan',
        lastName: 'Murray',
        age: 22,
        address: '261 Erdman Ford',
        city: 'East Daphne',
        state: 'Kentucky',
    },
    {
        userId: '6',
        firstName: 'Raquel',
        lastName: 'Kohler',
        age: 18,
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Ohio',
    },
    {
        userId: '7', //we'll use this as a unique row id
        firstName: 'Dylan',
        lastName: 'Murray',
        age: 22,
        address: '261 Erdman Ford',
        city: 'East Daphne',
        state: 'Kentucky',
    },
    {
        userId: '8',
        firstName: 'Raquel',
        lastName: 'Kohler',
        age: 18,
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Ohio',
    },
];


interface IKeys { key: string; label: string }

export const dataListCollumn = [
    {
        key: 'firstName',
        label: 'First Name',
        type: 'text'
    },
    {
        key: 'lastName',
        label: 'Last Name',
        type: 'text'
    },
    {
        key: 'age',
        label: 'Age',
        type: 'number'
    },
    {
        key: 'address',
        label: 'Address',
        type: 'text'
    },
    {
        key: 'city',
        label: 'City',
        type: 'text'
    },
    {
        key: 'state',
        label: 'State',
        type: 'text'
    },
]

export const dataListCollumn2 = [
    {
        key: 'fundName',
        label: 'Quỹ',
        type: 'text',
        minSize: 0,
        maxSize: 500,
        size: 250,
        align: 'left',
        copy: false,
    },
    {
        key: 'fundCode',
        label: 'Mã quỹ',
        type: 'text',
        minSize: 0,
        maxSize: 500,
        size: 100,
        align: 'left',
        copy: false,
    },
    {
        key: 'memberAccount',
        label: 'STK thành viên lưu ký',
        type: 'text',
        minSize: 0,
        maxSize: 500,
        size: 150,
        align: 'left',
        copy: false,
    },
    {
        key: 'fundType',
        label: 'Loại quỹ',
        type: 'text',
        minSize: 0,
        maxSize: 500,
        size: 80,
        align: 'left',
        copy: false,
    },
    {
        key: 'company',
        label: 'Công ty quản lý quỹ',
        type: 'text',
        minSize: 0,
        maxSize: 500,
        size: 294,
        align: 'left',
        copy: false,
    },
    {
        key: 'price',
        label: 'Mệnh giá ',
        type: 'number',
        minSize: 0,
        maxSize: 500,
        size: 100,
        align: 'right',
        copy: false,
    },
    {
        key: 'volumn',
        label: 'KL phát hành',
        type: 'number',
        minSize: 0,
        maxSize: 500,
        size: 148,
        align: 'right',
        copy: false,
    },
    {
        key: 'code',
        label: 'Tham chiếu ',
        type: 'text',
        minSize: 0,
        maxSize: 500,
        size: 100,
        align: 'left',
        copy: false,
    },
    {
        key: 'status',
        label: 'TT',
        type: 'icon',
        minSize: 0,
        maxSize: 500,
        size: 80,
        align: 'center',
        copy: false,
    },
    {
        key: 'setting',
        label: '',
        type: 'setting',
        minSize: 0,
        maxSize: 500,
        size: 60,
        align: 'center',
        copy: false,
    },
]

export type Item2 = {
    id: number;
    fundName: string;
    fundCode: string,
    memberAccount: string,
    fundType: string,
    company: string,
    price: string,
    volumn: string,
    code: string,
    status: 1 | 2 | 3
}

export const data2: Item2[] = [
    {
        id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
        fundName: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        fundCode: 'VBAAVNVX',
        memberAccount: '32198742387',
        fundType: 'ETF',
        company: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        price: '20.900',
        volumn: '6.000.000',
        code: 'VN30',
        status: 1
    },
    {
        id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
        fundName: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        fundCode: 'VBAAVNVX',
        memberAccount: '32198742387',
        fundType: 'ETF',
        company: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        price: '20.900',
        volumn: '55.000.000',
        code: 'VN30',
        status: 3
    },
    {
        id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
        fundName: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        fundCode: 'VBAAVNVX',
        memberAccount: '32198742387',
        fundType: 'ETF',
        company: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        price: '20.900',
        volumn: '6.0040.000',
        code: 'VN30',
        status: 2
    },
    {
        id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
        fundName: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        fundCode: 'VBAAVNVX',
        memberAccount: '32198742387',
        fundType: 'ETF',
        company: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        price: '20.900',
        volumn: '42.000.000',
        code: 'VN30',
        status: 1
    },
    {
        id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
        fundName: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        fundCode: 'VBAAVNVX',
        memberAccount: '32198742387',
        fundType: 'ETF',
        company: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        price: '20.900',
        volumn: '6.000.000',
        code: 'VN30',
        status: 1
    },
    {
        id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
        fundName: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        fundCode: 'VBAAVNVX',
        memberAccount: '32198742387',
        fundType: 'ETF',
        company: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        price: '20.900',
        volumn: '55.000.000',
        code: 'VN30',
        status: 3
    },
    {
        id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
        fundName: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        fundCode: 'VBAAVNVX',
        memberAccount: '32198742387',
        fundType: 'ETF',
        company: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        price: '20.900',
        volumn: '6.0040.000',
        code: 'VN30',
        status: 2
    },
    {
        id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
        fundName: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        fundCode: 'VBAAVNVX',
        memberAccount: '32198742387',
        fundType: 'ETF',
        company: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        price: '20.900',
        volumn: '42.000.000',
        code: 'VN30',
        status: 1
    },
    {
        id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
        fundName: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        fundCode: 'VBAAVNVX',
        memberAccount: '32198742387',
        fundType: 'ETF',
        company: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        price: '20.900',
        volumn: '6.000.000',
        code: 'VN30',
        status: 1
    },
    {
        id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
        fundName: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        fundCode: 'VBAAVNVX',
        memberAccount: '32198742387',
        fundType: 'ETF',
        company: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        price: '20.900',
        volumn: '55.000.000',
        code: 'VN30',
        status: 3
    },
    {
        id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
        fundName: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        fundCode: 'VBAAVNVX',
        memberAccount: '32198742387',
        fundType: 'ETF',
        company: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        price: '20.900',
        volumn: '6.0040.000',
        code: 'VN30',
        status: 2
    },
    {
        id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
        fundName: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        fundCode: 'VBAAVNVX',
        memberAccount: '32198742387',
        fundType: 'ETF',
        company: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        price: '20.900',
        volumn: '42.000.000',
        code: 'VN30',
        status: 1
    },
    {
        id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
        fundName: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        fundCode: 'VBAAVNVX',
        memberAccount: '32198742387',
        fundType: 'ETF',
        company: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        price: '20.900',
        volumn: '6.000.000',
        code: 'VN30',
        status: 1
    },
    {
        id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
        fundName: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        fundCode: 'VBAAVNVX',
        memberAccount: '32198742387',
        fundType: 'ETF',
        company: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        price: '20.900',
        volumn: '55.000.000',
        code: 'VN30',
        status: 3
    },
    {
        id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
        fundName: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        fundCode: 'VBAAVNVX',
        memberAccount: '32198742387',
        fundType: 'ETF',
        company: 'VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam',
        price: '20.900',
        volumn: '6.0040.000',
        code: 'VN30',
        status: 2
    },
]