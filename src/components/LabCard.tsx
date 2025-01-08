import React, { lazy, Suspense } from "react"

interface LabCardProps {
    data: Lab
}

export const LabCard: React.FC<LabCardProps> = ({ data }) => {
    let { name, en_title, tags } = data;
    const Container = lazy(() => import(`@/data/labs/${name}/page.tsx`));
    return (
        <Suspense>
            <div id={name} className="flex flex-col gap-2 bg-zinc-950 border-zinc-800 border rounded-2xl overflow-hidden p-2 transition-[border-color] hover:border-zinc-700">
                <div className="min-h-12 rounded-xl bg-zinc-900">
                    <Container />
                </div>
                <div className="flex flex-col gap-1 p-1 font-normal">
                    <p className="text-zinc-200 text-sm">{en_title}</p>
                    <div className="flex gap-1">
                        {
                            tags.map(tag => (
                                <Tag name={tag} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Suspense>
    )
};


const Tag: React.FC<{ name: string }> = ({ name }) => {
    return (
        <div className="text-zinc-500 text-xs font-light px-2 py-0.5 bg-zinc-900 rounded-md">
            {name}
        </div>
    )
}