// 底部统计数据
export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer>
        <p className="stats">
          <em>为你的旅行准备一些物品吧！🚀</em>
        </p>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "全部清点完毕，准备出发吧！🛸"
          : `你已经有${numItems}件物品在清单中，有${numPacked}(${percentage}
        %)件物品已经被打包`}
      </em>
    </footer>
  );
}
