# SSM框架

## Spring

### IOC（控制反转）

> IOC思想的提出是为了解耦合
>
> 有IOC提供对象代替自己new对象，降低了代码的耦合度
>
> **IOC管理的对象叫做 Bean**

DI 依赖注入

> 在容器中建立bean与bean之间依赖关系的过程称为依赖注入



 实例化bean的三种方法

1. 构造方法
2. 静态工厂
3. 示例工厂（实现factoryBean（★））

#### spring纯注解开发

1. 新建`config` 包下的 `SpringConfig` 类 并在这个类上面添加 `@Configuration` 注解 和 `@ComponentScan("<包扫描路径>,[<>]")`  

2. 在主类中加载配置类

   ```java
   ApplicationContext applicationcontext = new AnnotationConfigApplicationContext (SpringConfig.class);
   ```

3. Bean的注解开发

   1. `@Component("id_name")` id_name 可写可不写，如果不写名字就要通过反射的方式获取Bean
   2. service层的Bean推荐使用 `@Service` 注解
   3. 数据层使用 `@Repository` 
   4. 表现层 `@Controller`

4. 控制Bean的作用范围和声明周期

   1. 添加 `@Scope("")` 注解 singleton 单例模式  prototype  非单例
   2. 增加初始化和销毁方法
   3. 在初始方法上加 `@PostConstruct` 在销毁方法上加 `@PreDestory` 

5. 注解开发依赖注入

   使用 `@Autowired` 有没有set方法都行，通过反射装配

   ==自动装配需要提供无参构造方法==

   > 在注入时如果有多个相同类型的Bean可以使用 `@Qualifier("id_name")` 指定注入的名称

   使用`@Value("数据")` 可以实现简单类型的注入

6. 注解加载外部的properties配置文件

   1. 在SpringConfig类上面加 `@PropertySource("xx.properties")` 注解
   2. `@Value(${})`

7. spring管理第三方Bean `@Bean`

### AOP

#### 事务处理

### 框架整合

## SpringMVC

## Maven

## Springboot

## Mybatis plus