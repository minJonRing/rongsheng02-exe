<template>
    <div class="temp5">
        <div class="head">
            <div class="title">工作载体</div>
            <div class="sub">WORK CARRIER</div>
        </div>
        <div class="box">
            <div class="relative">
                <Group class="g1" :list="list1">
                    <GroupTitle class="g-title-1" cn="产业工人改革" en="INDUSTRIAL WORKER REFORM" />
                </Group>
                <Group class="g2" :list="list2">
                    <GroupTitle class="g-title-2" cn="构建和谐劳工关系" en="BUILDING HARMONIOUS LABOR RELATIONS" />
                </Group>
                <Group class="g3" :list="list3">
                    <GroupTitle class="g-title-3" cn="健康企业建设" en="HEALTHY ENTERPRISE CONSTRUCTION" />
                </Group>
            </div>
        </div>
        <Book :head="{
            no: 1,
            cn: '构建和谐劳工关系',
            en: 'INDUSTRIAL WORKER REFORM'
        }" :word="word1" :show="showWordA5" :index="wordIndex1" />
        <Book :head="{
            no: 2,
            cn: '产业工人改革',
            en: 'INDUSTRIAL WORKER REFORM'
        }" :word="word2" :show="showWordB5" :index="wordIndex2" />
        <Book :head="{
            no: 3,
            cn: '健康企业建设',
            en: 'HEALTHY ENTERPRISE CONSTRUCTION'
        }" :word="word3" :show="showWordC5" :index="wordIndex3" />

    </div>
</template>

<script>
import Group from './components/group.vue'
import GroupTitle from './components/title.vue'
import Book from '../book/index.vue'
import Img1 from '@/assets/temp5/1.png'
import Img2 from '@/assets/temp5/2.png'
import Img3 from '@/assets/temp5/3.png'
import Img4 from '@/assets/temp5/4.png'
import Img5 from '@/assets/temp5/5.png'
import Img6 from '@/assets/temp5/6.png'
import Img7 from '@/assets/temp5/7.png'
import Img8 from '@/assets/temp5/8.png'
import Img9 from '@/assets/temp5/9.png'
import Img10 from '@/assets/temp5/10.png'
import Img11 from '@/assets/temp5/11.png'
import Img12 from '@/assets/temp5/12.png'
import Img13 from '@/assets/temp5/13.png'
import Img14 from '@/assets/temp5/14.png'
import Img15 from '@/assets/temp5/15.png'
import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        Group,
        GroupTitle,
        Book
    },
    data() {
        return {
            list1: [],
            list2: [],
            list3: [],
            word1: [
                [
                    { type: 1, data: "荣盛集团党群组织工作始终契合企业生产实际、员工客观需求,始终紧跟社会发展需°" },
                    { type: 1, data: "多年来，荣盛党群组织不断创新工作抓手，为企业发展助力、为员工提供更加优质的服务。" },
                    { type: 1, data: "围绕和谐劳动关系建设。一是实施人才培养工程。经过多年摸索，荣盛的培训机制不断完善，员工的岗前培训、入职集训以及平时的业务培训已经形成规范的流程和模式，员工培训基本实现年度全覆盖。并通过开展岗位技能比武，深入挖掘职业技能比武在技能人才培养、选拔和激励等方面的作用。二是开通职业发展通道。集团建有较为完善的竞争上岗和岗位考评制度。员工的努力和成果将会直接地反映在劳动报酬当中。同时，还出台《特殊津贴等级评定办法》，为一线员工的晋升提供通道。三是持续提高薪资福利。荣盛创办以来，从未发生拖欠工资情况，近年来员工收入以年均 10% 以上稳定增长。与此同时荣盛积极出台多项福利政策，不断提高员工" },
                ],

            ],
            wordLen1: 0,
            wordIndex1: 0,
            word2: [
                [
                    { type: 1, data: '产业工人是工人阶级中发挥支撑作用的主体力量，是创新驱动发展的骨干力量。荣盛通过产业工人改革，使产业工人不断壮大、综合素质不断提高，保障产业工人地位的制度更加健全。近年来，荣盛拓宽民主管理渠道逐步实现管理民主化的目标。从最先的职工代表大会，到党员民主听证，到推行厂务公开，再到员工代表座谈会，员工奖惩有听证会，制度发布有职工代表大会通过，工资调整有集体协商，不断深化“员工是企业最大的财富”这一价值理念。另一方面，荣盛不断创新沟通载体，在“900123”员工内部热线的基础上，先后在《 荣盛报 》、荣盛微信公众号等平台开通了稽查监督举报方式，切实倾听广大员工的心声,协调员工遇到的各类矛盾。' },
                    { type: 2, data: "Workers are the main force that plays a supporting role in the working class and the backbone of innovation driving development.Through the reform of workers,Rongsheng has continuously expanded the quantity and improved comprehensive quality of workers,to guarantee the system ensuring the status of industrial workers to be more perfect. In recent years,Rongsheng" },

                ],
                [
                    { type: 2, wrap: true, data: " has expanded the ways of democratic management and gradually achieved the goal of democratization of management.From the employee congress,the democratic hearing of Party members, to the implementation of the openness of company affairs, and then to the symposium of employee representatives,there will be hearings to decide employees’ rewards and punishments, the employee congress to pass the regulations, and collective negotiation on salary adjustment, so as to continuousl deepen the value concept of “Employees are the greatest wealth of the enterprise” On the other hand, on the basis of “900123” staff hotline, Rongsheng has been constantly innovating communication carriers,opening reporting methods of inspection and supervision on platforms as Rongsheng News, official account of Rongsheng WeChat, etc., so as to listen to the voice of employees and coordinate all kinds of contradictions encountered by employees" },
                ]
            ],
            wordLen2: 0,
            wordIndex2: 0,
            word3: [
                [
                    { type: 1, data: '员工的健康是企业最大的财富。在健康企业建设进程中，荣盛以制度为保障，大力建设完普健康环境、提供健康管理与服务、培育发展健康文化，努力探索富有特色的健康荣盛建设之路。在建立健全管理制度方面，由党组织负责人牵头建立“健康企业”领导小组设立 HSE 管理部，制定健康企业发展规划结合企业性质、作业内容、劳动者健康需求和健康影响因素等，建立完普与劳动者健康相关的各项规章制度，规范企业劳动用工管理在建设完善健康环境方面，进一步完善企业基础设施，为职工提供布局合理、设施完善,整洁卫生、绿色环保、舒适优美和人性化的工作环境。积极开展控烟工作，打造无烟环境在提供健康管理与服务方面，建立职工健康管理服务体系，实施人群分类健康管理和指导。制定应急预案，防止传染病等传播流行制定并实施员工心理援助计划，提供心理咨询等服务。组织开展适合不同工作场所或工作方式特点的健身活动。落实《女职工劳动保护特别规定》。依法依规开展职业病防治工作。在培育发展健康文化方面，' },
                ],
                [
                    { type: 1, wrap: true, data: '广泛开展职业健康、慢性病防治、传染病防控和心理健康等健康知识宣传教育活动，提高员工健康素养。设有以荣盛文化中心为主体的娱乐健身场所。开展羽毛球赛、篮球赛等多种形式的职工文体活动。积极参与无偿献血等社会公益活动。关爱员工身心健康，构建和谐、平等、信任、宽容的人文环境。' },
                    { type: 2, data: "The health of employees is the greatest wealth of an enterprise. In the process of healthy enterprise construction, Rongsheng takes the system as the guarantee to build and improve a healthy environment, provide health management and services, cultivate and develop a healthy culture, and tries to explore a distinctive road of building a healthy company. For establishing and improving the management system, the person in charge of the Party organizations shall take the lead to establish a “Healthy Enterprise” leading group, establish an HSE management department, formulate the development plan of healthy enterprises, establish and improve various rules and regulations related to workers' health, workers' health needs and health influencing factors, and then standardize the labor and employment management. For building a healthy environment, Rongsheng further improves the" },
                ],
                [
                    { type: 2, wrap: true, data: "infrastructure and provides employees with a reasonable layout, complete facilities,green environmental protection and humanized working environment. Rongsheng actively carries out smoking control and creates a smoke-free environment. For providing healthy management and services, Rongsheng establishes health management service system of employees, and implements health management and guidance of population classified. Meanwhile, Rongsheng formulates emergency plans to prevent the spread of infectious diseases; formulates and implements psychological assistance plan; provides psychological counseling and other services; organizes fitness activities suitable for employees in different workplaces or by different working methods; implements the regulation of Special Provisions on Labor Protection for Female Employees;carries out occupational disease prevention and control in accordance with laws and regulations. For cultivating and developing health culture, Rongsheng has widely carried out activities of health knowledge publicity and education such as occupational health, chronic disease prevention and control, infectious disease prevention and control and mental health. Rongsheng culture center,the main entertainment and fitness place,is used" }
                ],
                [
                    { type: 2, wrap: true, data: "to hold various forms of staff recreational activities such as badminton, basketball, etc. Rongsheng participates in social public welfare activities such as blood donation, etc." }
                ]
            ],
            wordLen3: 0,
            wordIndex3: 0,
        }
    },
    computed: {
        ...mapGetters(['showWordA5', 'switchWordA5', 'showWordB5', 'switchWordB5', 'showWordC5', 'switchWordC5'])
    },
    watch: {
        showWordA5(data) {
            if (data) {
                this.setData({ type: 'showWordB5', active: '0' })
                this.setData({ type: 'showWordC5', active: '0' })
            }
        },
        showWordB5(data) {
            if (data) {
                this.setData({ type: 'showWordA5', active: '0' })
                this.setData({ type: 'showWordC5', active: '0' })
            }
        },
        showWordC5(data) {
            if (data) {
                this.setData({ type: 'showWordA5', active: '0' })
                this.setData({ type: 'showWordB5', active: '0' })
            }
        },
        // 文档切换
        switchWordA5(data) {
            if (data > this.wordLen1) {
                this.setData({ type: 'switchWordA5', active: 0 })
            } else if (data < 0) {
                this.setData({ type: 'switchWordA5', active: this.wordLen1 })
            } else {
                this.wordIndex1 = data
            }
        },
        // 文档切换
        switchWordB5(data) {
            if (data > this.wordLen2) {
                this.setData({ type: 'switchWordB5', active: 0 })
            } else if (data < 0) {
                this.setData({ type: 'switchWordB5', active: this.wordLen2 })
            } else {
                this.wordIndex2 = data
            }
        },
        // 文档切换
        switchWordC5(data) {
            if (data > this.wordLen3) {
                this.setData({ type: 'switchWordC5', active: 0 })
            } else if (data < 0) {
                this.setData({ type: 'switchWordC5', active: this.wordLen3 })
            } else {
                this.wordIndex3 = data
            }
        },
    },
    created() {
        this.wordLen1 = this.word1.length - 1
        this.wordLen2 = this.word2.length - 1
        this.wordLen3 = this.word3.length - 1
        this.init()
    },
    methods: {
        ...mapActions({ setData: 'system/setData' }),
        init() {
            const files = import.meta.globEager('@/assets/temp5/*.png', { as: "url" })
            const obj = {}
            Object.values(files).map(file => {
                const key = file.replace(/.+(?=\/)|\/|\.png/g, '')
                obj[key] = file
            })
            this.list1 = [
                { type: 1, data: Img1 },
                { type: 1, data: Img2 },
                { type: 1, data: Img3 },
                { type: 1, data: Img4 },
                { type: 1, data: Img5 },
                { type: 1, data: Img6 },
            ]
            this.list2 = [
                { type: 1, data: Img7 },
                { type: 1, data: Img8 },
                { type: 2, data: ['员工热线', '受理流程'] },
                { type: 1, data: Img9 },
                { type: 1, data: Img10 },
                { type: 2, data: ['稽查', '监督', '平台'] },
            ]
            this.list3 = [
                { type: 1, data: Img11 },
                { type: 1, data: Img12 },
                { type: 1, data: Img13 },
                { type: 1, data: Img14 },
                { type: 1, data: Img15 },
                { type: 2, data: [] },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.temp5 {
    position: relative;
    height: 100%;

    .head {
        position: relative;
        height: 373px;

        .title {
            position: absolute;
            text-align: center;
            color: #C12E1A;
            font-size: 140px;
            font-weight: bold;
            line-height: 1;
            top: 96px;
            left: 160PX;
        }

        .sub {
            position: absolute;
            text-align: center;
            color: #C12E1A;
            font-size: 40px;
            // letter-spacing: 4px;
            width: 560px;
            top: 260px;
            left: 160PX;
            font-weight: bold;
        }
    }


    .box {
        padding: 0 60px;

        .relative {
            position: relative;
            width: 2000px;
            height: 1000px;

            .g1 {
                top: 198px;
                left: 175px;

                .g-title-1 {
                    position: absolute;
                    top: -130px;
                    left: -175px;
                }
            }

            .g2 {
                top: -160px;
                left: 850px;

                .g-title-2 {
                    position: absolute;
                    top: -10px;
                    left: 410px;
                    width: 440px;
                }
            }

            .g3 {
                top: 438px;
                left: 1140px;

                .g-title-3 {
                    position: absolute;
                    top: -30px;
                    left: 500px;
                    width: 440px;
                }
            }
        }

    }
}
</style>