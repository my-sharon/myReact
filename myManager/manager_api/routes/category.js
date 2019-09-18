import express from 'express';

const router = express.Router({});

/**
 * 往数据库中插入一条新纪录
 */
router.post('/category/api/add', (req, res, next) => {

});

/**
 * 获取分类列表
 */
router.get('/category/api/list', (req, res, next)=>{
    res.json({
        status_code: 200,
        result: [
            {
                main_title: 'Web大前端',
                main_total_count: 10,
                main_is_show: '1',
                main_sort: '1',
                sub_course: [
                    {
                        sub_title: 'html+css',
                        sub_total_count: 2,
                        sub_is_show: '1',
                        sub_sort: '2'
                    },
                    {
                        sub_title: 'JavaScript',
                        sub_total_count: 1,
                        sub_is_show: '1',
                        sub_sort: '2'
                    },
                    {
                        sub_title: 'JavaScript高级',
                        sub_total_count: 1,
                        sub_is_show: '1',
                        sub_sort: '2'
                    },
                    {
                        sub_title: '小型框架集',
                        sub_total_count: 1,
                        sub_is_show: '1',
                        sub_sort: '2'
                    },
                    {
                        sub_title: 'Node+Ajax',
                        sub_total_count: 1,
                        sub_is_show: '1',
                        sub_sort: '2'
                    },
                    {
                        sub_title: 'Vue',
                        sub_total_count: 1,
                        sub_is_show: '1',
                        sub_sort: '2'
                    },
                    {
                        sub_title: 'React',
                        sub_total_count: 1,
                        sub_is_show: '1',
                        sub_sort: '2'
                    },
                    {
                        sub_title: '小程序',
                        sub_total_count: 2,
                        sub_is_show: '1',
                        sub_sort: '2'
                    }
                ]
            },
            {
                main_title: 'JavaEE+大数据',
                main_total_count: 3,
                main_is_show: '1',
                main_sort: '1',
                sub_course: [
                    {
                        sub_title: 'Spring',
                        sub_total_count: 2,
                        sub_is_show: '1',
                        sub_sort: '2'
                    },
                    {
                        sub_title: 'Oricon',
                        sub_total_count: 1,
                        sub_is_show: '1',
                        sub_sort: '2'
                    }
                ]
            },
            {
                main_title: 'Python+人工智能',
                main_total_count: 2,
                main_is_show: '1',
                main_sort: '1',
                sub_course: [
                    {
                        sub_title: 'PyQT5',
                        sub_total_count: 2,
                        sub_is_show: '1',
                        sub_sort: '2'
                    }
                ]
            },
            {
                main_title: '数据库',
                main_total_count: 2,
                main_is_show: '1',
                main_sort: '1',
                sub_course: [
                    {
                        sub_title: 'Mysql',
                        sub_total_count: 1,
                        sub_is_show: '1',
                        sub_sort: '2'
                    },
                    {
                        sub_title: 'MongoDB',
                        sub_total_count: 1,
                        sub_is_show: '1',
                        sub_sort: '2'
                    },
                    {
                        sub_title: 'Oracle',
                        sub_total_count: 1,
                        sub_is_show: '1',
                        sub_sort: '2'
                    }
                ]
            }
        ]
    });
});

module.exports = router;