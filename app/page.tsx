import IntroSection from "@/components/intro"
import styles from "./page.module.scss"
import image from "@/public/profile.webp"
import Introduce from "@/components/introduce"
import Skill from "@/components/skill"
import Experience from "@/components/experience"
import Project from "@/components/project"
import Education from "@/components/education"
export default function Home() {
	return (
		<main className={styles.main}>
			<IntroSection
				image={image}
				name={"최성현"}
				careerStartDate="2022-06-01"
				inputs={[
					{ email: "cjh980120@gmail.com" },
					{ github: "https://github.com/suxghyxn" },
				]}
			/>
			<Introduce
				introducing={[
					"효율적이고 확장 가능한 코드를 작성하는 데 집중하며, 개발 과정에서 때때로 제 선택이 올바른지 고민할 때가 있습니다. 그러나 저는 코딩에 절대적인 정답은 없다고 믿습니다. 비록 덜 효율적일 수 있는 방법이라도 새로운 접근 방식을 시도하고, 그 과정에서 얻은 통찰을 바탕으로 리서치와 학습을 통해 더 나은 해결책을 찾아내어, 이를 빠르게 적용하는 유연한 자세를 유지하고 있습니다.",
				]}
			/>
			<Skill
				skillItems={[
					{
						skillName: "language",
						skillValue: ["TypeScript", "JavaScript", "Golang", "Python"],
					},
					{
						skillName: "fameWorks & libraries",
						skillValue: [
							"React.JS",
							"Next.JS",
							"Node.JS",
							"ReactNative",
							"Flutter",
						],
					},
					{
						skillName: "database",
						skillValue: ["MySQL", "MariaDB", "FireBase"],
					},
					{ skillName: "tool", skillValue: ["Figma", "Git", "JIRA"] },
				]}
			/>
			<Experience
				data={[
					{
						startDate: "2023.11.13",
						isCurrent: true,
						isPeriod: true,
						title: "엑스포럼",
						subTitle: "DX팀 프론트엔드 개발자",
						list: [
							"기존 프로젝트 유지보수 및 제작",
							"Jenkins 기반 CICD 구축",
							"글로벌 프로젝트 제작",
							"신규 비즈니스 로직 구현",
						],
					},
					{
						startDate: "2023.08.14",
						endDate: "2023.10.19",
						isPeriod: true,
						title: "막시마",
						subTitle: "개발팀 프론트엔드 개발자",
						list: [
							"신규 앱/웹 제작",
							"MySQL / NoSQL 데이터베이스 유지보수 및 관리",
						],
					},
					{
						startDate: "2022.06.22",
						endDate: "2023.08.12",
						isPeriod: true,
						title: "바나나코퍼레이션",
						subTitle: "개발팀 프론트엔드 개발자",
						list: [
							"기존 프로젝트 유지보수 작업",
							"E-Commerce 신규 개발 ",
							"신규 서비스 개발(ReactNative)",
						],
					},
				]}
			/>

			<Project
				data={[
					{
						title: "Server Driven UI",
						startDate: "2024.06.01",
						endDate: "2024.01.30",
						stackList: ["Next.JS", "SWR"],
						subTitle: "엑스포럼",
						list: [
							"Turbo Repo를 활용해 공통 컴포넌트를 효율적으로 관리",
							"기획 단계에서 구상한 내용을 바탕으로 SDUI 디자인 시스템 설계 및 구현",
							"데이터베이스 설계를 통해 SDUI 컴포넌트를 체계적으로 제작",
						],
					},
					{
						title: "전시회 웹사이트",
						startDate: "2024.03.11",
						endDate: "2024.05.24",
						stackList: ["Next.JS", "SWR"],
						subTitle: "엑스포럼",
						list: [
							"공통 컴포넌트 개발 및 관리",
							"SSR과 ISR을 통한 데이터 캐싱 관리",
							"SEO 최적화",
							"웹사이트 최적화를 통해 Lighthouse 퍼포먼스 점수를 40점에서 99점으로 약 2.47배 증가시킴",
							"Git Submodule을 활용해 전시회 웹사이트와 어드민 대시보드 간 공통 컴포넌트를 효과적으로 관리. 이를 통해 두 프로젝트 간 코드 일관성을 유지하고 유지보수를 간소화함",
							"포트원을 연동하여 외국인 사용자를 위한 결제 프로세스를 구축 및 운영",
							"어드민 대시보드 개발: 전시회 관리자가 전시 내용을 쉽게 업데이트하고 관리할 수 있도록 대시보드를 설계 및 구현.",
							"데이터 관리: 참가자 등록 정보, 티켓 환불(취소) 관리할 수 있는 기능을 통해 관리 효율성 증대",
							"사용자 친화적인 인터페이스 설계 및 반응형 디자인 구현으로 다양한 디바이스에서 최적화된 사용자 경험 제공.",
						],
					},
					{
						title: "사내 명함 스캔 어플",
						startDate: "2024.01.15",
						endDate: "2024.02.28",
						stackList: ["Flutter", "TensorFlow", "React"],
						subTitle: "엑스포럼",
						list: [
							"실시간 스캔: Flutter를 이용하여 사용자가 명함을 실시간으로 스캔할 수 있는 기능 개발.",
							"백엔드와의 데이터 통신: 명함 스캔 결과를 백엔드 서버에 저장하고, 사용자와의 데이터 통신을 구현하여 실시간으로 데이터 업데이트.",
						],
					},
					{
						title: "TOPIC(B2C 사이트)",
						startDate: "2023.11.20",
						endDate: "2024.01.12",
						stackList: ["Next.JS", "HBS"],
						subTitle: "엑스포럼",
						list: [
							"어드민 웹 개발",
							"프로젝트 유지보수",
							"REST API를 통해 수신한 데이터를 웹 페이지에 효율적으로 표시하는 기능 구현.",
							"Chart.js를 활용하여 어드민 페이지의 데이터 시각화를 개선, 사용자에게 데이터 분석 정보를 직관적으로 제공.",
							"서버 사이드 렌더링 및 클라이언트 사이드 렌더링을 활용하여 데이터 렌더링 최적화.",
						],
					},

					//
					{
						title: "타로 키오스트 앱/어드민 제작",
						startDate: "2023.08.21",
						endDate: "2023.10.18",
						stackList: ["Next.JS", "FireBase", "TypeScript", "Electron.JS"],
						subTitle: "막시마",
						list: [
							"어드민에서 가맹점 생성 기능 구현.",
							"어드민 웹 페이지에서 가맹점 정보를 입력할 수 있는 폼을 개발.",
							"키오스크 결과내용 QR 코드 생성",
							"Firebase를 활용한 통합 관리",
							"랜딩 페이지 제작",
							"Electron.js를 사용하여 타로 키오스크의 데스크톱 애플리케이션 개발.",
							"크로스 플랫폼 환경을 지원하여 Windows 및 macOS에서 원활하게 실행될 수 있도록 구현.",
							"데스크톱 환경에 맞춘 사용자 인터페이스(UI) 및 기능 최적화.",
						],
					},
					{
						title: "cafe24 연동 상품 공유, 구입 시 적립",
						startDate: "2022.11.01",
						endDate: "2023.02.01",
						stackList: ["ReactNative", "Node.JS", "TypeScript", "Nest.JS"],
						subTitle: "바나나코퍼레이션",
						list: [
							"다양한 환경에서 재사용 가능한 공유 컴포넌트를 개발",
							"어드민 설정 기능을 구현하였습니다.",
						],
					},
					{
						title: "Node Shop",
						startDate: "2022.07.01",
						stackList: ["ReactNative", "Node.JS", "TypeScript", "Nest.JS"],
						endDate: "2022.10.01",
						subTitle: "바나나코퍼레이션",
						list: [
							"데이터를 주입하여 Chart.js를 사용하여 시각화 기능을 구현하였습니다",
							"전체적인 앱의 기능과 퍼블리싱을 구현하였습니다.",
							"재사용 가능한 공유 컴포넌트를 제작하였습니다",
							"웹 크롤링 기술을 활용하여 데이터를 수집하고 구현하였습니다",
						],
					},
				]}
			/>

			<Education
				data={[
					{
						startDate: "2016.03.02",
						endDate: "2022.02.11",
						title: "청주대학교",
						subTitle: "항공기계공학",
					},
					{
						startDate: "2013.03.04",
						endDate: "2016.02.05",
						title: "양영디지털고등학교",
						subTitle: "디지털로봇과",
					},
				]}
			/>
		</main>
	)
}
