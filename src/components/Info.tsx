type Props = {
    title: string
    ms: number | string
}
const
    Info = (props: Props) => {
        return (
            <div className="w-24 mx-1 p-2 bg-white text-blue-500 rounded-lg">
                <div className="font-mono leading-none" x-text="ms">{props.title}: {props.ms}</div>
            </div>
        )
    }

export default Info