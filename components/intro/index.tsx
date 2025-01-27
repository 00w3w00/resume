"use client"
import Image, { StaticImageData } from "next/image"
import styles from "./intro.module.scss"
import Link from "next/link"
import { LiaGithub } from "react-icons/lia"
import { MdOutlineMailOutline } from "react-icons/md"
import { IconType } from "react-icons"

interface IntroSectionProps {
	image: StaticImageData
	name: string
	careerStartDate?: string
	inputs: { email?: string; github?: string; blog?: string }[]
}

const IntroSection = ({
	image,
	inputs,
	name,
	careerStartDate,
}: IntroSectionProps) => {
	const isStartWithHttp = (url: string) => {
		return url.startsWith("http") ? url : `http://${url}`
	}
	const getIconByType = (type: string): IconType | null => {
		switch (type) {
			case "github":
				return LiaGithub
			case "email":
				return MdOutlineMailOutline
			default:
				return null
		}
	}

	return (
		<section className={styles.intro_wrap}>
			{/* <div
				className={styles.intro_image}
				style={{
					aspectRatio: `${image.width} / ${image.height}`,
				}}
			>
				<Image
					onContextMenu={(e) => {
						return e.preventDefault()
					}}
					placeholder="blur"
					blurDataURL={image.blurDataURL}
					src={image.src}
					alt={name}
					fill
					style={{ objectFit: "cover" }}
					draggable={false}
					sizes="(max-width: 300px) 300px, 100vw"
				/>
			</div> */}

			<div className={styles.intro_info_wrap}>
				<h3 className={styles.intro_name}>프론트엔드 개발자 {name}</h3>
				<h3 className={styles.intro_desc}>
					{`효율적이고 확장 가능한 코드를 작성하며, 항상 새로운 접근 방식을 시도하고
					빠르게 적용하려는 포기하지 않고 책임감 있게 일하는 개발자입니다.`}
				</h3>

				{inputs.map((input, index) => {
					const [key, value] = Object.entries(input)[0]
					const isEmail = key === "email"
					const Icon = getIconByType(key)

					return (
						<div key={key} className={styles.intro_inputs}>
							{Icon && <Icon className={styles.icon} />}
							<Link
								className={styles.link}
								target={isEmail ? "_self" : "_blank"}
								href={
									isEmail ? `mailto:${value}` : isStartWithHttp(value ?? "")
								}
							>
								{value}
							</Link>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default IntroSection
