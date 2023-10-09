import React from "react";

// React.lazy React.suspense
export default function LazyComponent(props) {
    const Component = React.lazy(() => import(`@/${props.path}`));
    return (
        <React.Suspense fallback={<div>正在加载中</div>}>
            <Component />
        </React.Suspense>
    )
}