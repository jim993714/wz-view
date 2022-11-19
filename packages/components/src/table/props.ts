import { ref } from 'vue';

type GetListFunc = <T>(v: object) => Promise<T>;
export default function useTbleProps() {
  const defaultProps = {
    'row-key': 'id',
    'bordered': { cell: true },
    'hover': true,
    'border': true,
    'stripe': true,
    'size': 'small',
    'column-resizable': true,
    // "scroll": { y: 550, x: '100%' },
    'expandable': false,
    'loading': true,
    'data': [] as any[],
    'pagination': {
      current: 1,
      pageSize: 20,
      total: 0,
      showPageSize: true,
    } 
  };

  // 属性组
  const propsRes = ref(defaultProps);

  // 加载效果
  const setLoading = (status: boolean) => {
    propsRes.value.loading = status;
  };

  /**
   * 分页设置
   * @param current //当前页数
   * @param total //总页数默认是0条，可选
   * @param fetchData 获取列表数据,可选
   */
  interface SetPaginationPrams {
    current: number;
    total?: number;
  }

  const setPagination = ({ current, total }: SetPaginationPrams) => {
    propsRes.value.pagination.current = current;
    total && (propsRes.value.pagination.total = total);
  };


  // 事件触发组
  const propsEvent = ref({
    //排序触发
    sorterChange: (dataIndex: string, direction: string) => {
      console.log(dataIndex, direction);
    },
    //分页触发
    pageChange: (current: number) => {
      setPagination({ current });
    },
    // 修改每页显示条数
    pageSizeChange:(pageSize:number)=>{
      propsRes.value.pagination.pageSize = pageSize;
    }
  });

  return {
    propsRes,
    propsEvent,
    setLoading,
    setPagination,
  };
}